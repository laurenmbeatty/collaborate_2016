define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdialog',
          'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu'
     ],
     function(oj, ko, $) {
          /**
           * The view model for the header module
           */
          function HeaderViewModel() {
               var self = this;

               // Application Name used in Branding Area
               self.appName = ko.observable("JetDocs");

               // Media Queries for repsonsive header
               var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
               self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

          }
          return new HeaderViewModel();
     }
);