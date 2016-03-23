/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojdialog'],
        function (oj, ko, $)
        {
            function dialogModel() {

                var self = this;
                self.handleOpen = $("#buttonOpener").click(function () {
                    alert("made it!");
                    $("#modalDialog1").ojDialog("open");
                });

                self.handleOKClose = $("#okButton").click(function () {
                    $("#modalDialog1").ojDialog("close");
                });
            }
            return dialogModel();

        });
//$(document).ready(function () {
//
//    //Oracle DoCS REST API information
//    var consts = {
//        //url will be personal to your own domain
//        url: "https://dcs-fishbowlsolutions.documents.us2.oraclecloud.com",
//        apiPath: "/documents/api",
//        apiVersion: "/1.1",
//        files: "/files",
//        data: "/D252B819CF83B3B3C2F512ED580C088D60E36785B51D/data"
//    };
//
//    //this brings back all of the folders
//    var requestPath = consts.url + consts.apiPath + consts.apiVersion + consts.files + consts.data;
//
//    var getFiles = function () {
//        $.ajax({
//            type: 'GET',
//            url: requestPath,
//            dataType: 'text',
//            crossDomain: true,
//            //has to be false to work with CORS plug-in
//            xhrFields: {
//                withCredentials: false
//            },
//            beforeSend: function (xhr) {
//                xhr.setRequestHeader('Authorization',
//                        'Basic ' + btoa('lbeatty@fishbowlsolutions.com:Fl@m1ng0'));
//            },
//            success: function (data) {
//                console.log(data);
//
//
//                //TODO loop through the data here data.items[i].name gives name of folder
//            },
//            error: function (jqXHR, textStatus, errorThrown) {}
//        });
//    };
//
//    getFiles();
//
//});
//
//
//
