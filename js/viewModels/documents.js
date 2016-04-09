define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojdialog'],
     function(oj, ko, $) {
          var dialogModel = function() {


               this.handleOpen = $("#buttonOpener").click(function() {
                    alert("made it!");
                    $("#modalDialog1").ojDialog("open");
               });

               this.handleOKClose = $("#okButton").click(function() {
                    $("#modalDialog1").ojDialog("close");
               });
          };
          return dialogModel();

     });