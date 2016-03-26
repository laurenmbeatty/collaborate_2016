define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojinputtext'],
        function (oj, ko, $)
        {
            var BetterListModel = function () {
                this.allItems = ko.observableArray([{"id": "", "name": ""}]);

                this.selectedItems = ko.observableArray([]);

                this.dataSource = new oj.ArrayTableDataSource(this.allItems, {idAttribute: "id"});

                var folders;

                var newFolders;

                var consts = {
                    //url will be personal to your own domain
                    url: "https://dcs-fishbowlsolutions.documents.us2.oraclecloud.com",
                    apiPath: "/documents/api",
                    apiVersion: "/1.1",
                    mainFolder: "/folders/self",
                    mainFolderItems: "/folders/items",
                    subFolderItems: "/folders/{folder.GUID}/items"
                };

                //this brings back all of the folders                   
                var requestPath = consts.url + consts.apiPath + consts.apiVersion + consts.mainFolderItems;

                var folderInfo = consts.url + consts.apiPath + consts.apiVersion;

                var getFolders = function () {
                    $.ajax({
                        type: 'GET',
                        url: requestPath,
                        dataType: 'text',
                        crossDomain: true,
                        //has to be false to work with CORS plug-in
                        xhrFields: {
                            withCredentials: false
                        },
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization',
                                    //TODO put your username and password the parens like this: btoa('jsim@fishbowlsolutions.com:passwordgoeshere')
                                    'Basic ' + btoa(''));
                        },
                        success: function (data) {
                            folders = JSON.parse(data);
                            console.log(folders);

                            for (var i = 0; i < folders.items.length; i++) {
                                console.log(folders.items[i]);
                                if (folders.items[i].type === "folder") {
                                    allItems.push({
                                        id: folders.items[i].id,
                                        name: folders.items[i].name

                                    });

                                }
                                console.log(allItems());

                            }

                        },
                        error: function (jqXHR, textStatus, errorThrown) {}
                    });

                };
                getFolders();

                var clickFolder = function () {
                    var clickedFolderID = allItems()[1].id;
                    console.log("The clicked folder is: " + clickedFolderID);
                    $.ajax({
                        type: 'GET',
                        url: folderInfo + "/folders/" + clickedFolderID + "/items",
                        dataType: 'text',
                        crossDomain: true,
                        xhrFields: {
                            withCredentials: false
                        },
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', 'Basic'
                                    + btoa(''));
                        },
                        success: function (data) {

                            var subFolders = JSON.parse(data);
                            console.log("The sub-folders are: " + subFolders);
                        }

                    });
                };

                $(document).on("click", "#ui-id-16", function () {
                    clickFolder();
                });
            };
            return BetterListModel();
        });