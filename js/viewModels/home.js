

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart'],
function(oj, ko, $)
{   
    function ChartModel() {
        var self = this;
        self.threeDValue = ko.observable('off');

        /* chart data */
        var pieSeries = [{name: "jQuery", items: [20]},
                         {name: "jQueryUI", items: [10]},
                         {name: "KnockoutJS", items: [30]},
                         {name: "HammerJS", items: [10]},
                         {name: "RequireJS", items: [30]}];
        
        this.pieSeriesValue = ko.observableArray(pieSeries);
        
        /* toggle buttons*/
        self.threeDOptions = [
            {id: '2D', label: '2D', value: 'off', icon: 'oj-icon demo-2d'},
            {id: '3D', label: '3D', value: 'on', icon: 'oj-icon demo-3d'}
        ];
        self.threeDValueChange = function(event, data) {
            self.threeDValue(data.value);
            return true;
        };
    }
    
    return ChartModel();

        });


