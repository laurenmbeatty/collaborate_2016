

requirejs.config({
  // Path mappings for the logical module names
  paths:
 //injector:mainReleasePaths
  {
    'knockout': 'libs/knockout/knockout-3.4.0',
    'jquery': 'libs/jquery/jquery-2.1.3.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
    'promise': 'libs/es6-promise/promise-1.0.0.min',
    'hammerjs': 'libs/hammer/hammer-2.0.4.min',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
    'ojs': 'libs/oj/v2.0.0/debug',
    'ojL10n': 'libs/oj/v2.0.0/ojL10n',
    'ojtranslations': 'libs/oj/v2.0.0/resources',
    'signals': 'libs/js-signals/signals.min',
    'text': 'libs/require/text'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  },
  // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
  // resources with a custom translation file.
  // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
  // a path that is relative to the location of this main.js file.
  config: {
    ojL10n: {
      merge: {
        //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
      }
    }
  }
});

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore','knockout', 'jquery', 'promise', 'ojs/ojknockout', 'ojs/ojrouter',
  'ojs/ojmodule', 'ojs/ojoffcanvas', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource',
  'ojs/ojlistview', 'ojs/ojjsontreedatasource', 'ojs/ojbutton','ojs/ojtable', 'ojs/ojchart',
  'ojs/ojtoolbar', 'ojs/ojdialog'],
  function (oj, ko, $) { // this callback gets executed when all required modules are loaded
    var router = oj.Router.rootInstance;

    router.configure({
       'home': {label: 'Home', isDefault: true},
       'folders': {label: 'Folders'},
       'documents': {label: 'Documents'}
    });

    function RootViewModel() {
      var self = this;
      self.router = router;


      var navData = [
          {name: 'Home', id: 'home'},
          {name: 'Folders', id: 'folders'},

          {name: 'Documents', id: 'documents'}


      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      self.navChange = function(event, ui) {
        if (ui.option === 'selection' && ui.value !== self.router.stateId()) {
          // Only toggle navigation drawer when it's shown on small screens
          if (self.smScreen())
            self.toggleDrawer();
          self.router.go(ui.value);
        }
      };
      self.drawerParams = {
        displayMode: 'push',
        selector: '#offcanvas'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      };
      // Close the drawer for medium and up screen sizes
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
    }

    oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
    oj.Router.sync().then(
      function () {
        // bind your ViewModel for the content of the whole page body.
        ko.applyBindings(new RootViewModel(), document.getElementById('globalBody'));
      },
      function (error) {
        oj.Logger.error('Error in root start: ' + error.message);
      }
    );
  }
);
