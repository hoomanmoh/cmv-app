define({
    map: true,
    mapClickMode: true,
    mapRightClickMenu: true,
    identifyLayerInfos: true,
    identifyTolerance: 5,

    // config object definition:
    //	{<layer id>:{
    //		<sub layer number>:{
    //			<pop-up definition, see link below>
    //			}
    //		},
    //	<layer id>:{
    //		<sub layer number>:{
    //			<pop-up definition, see link below>
    //			}
    //		}
    //	}

    // for details on pop-up definition see: https://developers.arcgis.com/javascript/jshelp/intro_popuptemplate.html

    identifies: {
        boundary: {
            2: {
                title: 'Zip Codes',
                fieldInfos: [{
                    fieldName: 'ZIP',
                    visible: true
                }, {
                    fieldName: 'PO_NAME',
                    visible: true
                }]
            },
            5: {
                title: 'County',
                fieldInfos: [{
                    fieldName: 'Name',
                    visible: true
                }]
            },
            8: {
                title: 'CAC Districts',
                fieldInfos: [{
                    fieldName: 'District',
                    visible: true
                }]
            }

        },
        inventory: {
            0: {
                title: 'Inventory - New',
                fieldInfos: [{
                    fieldName: 'Classification',
                    visible: true
                }, {
                    fieldName: 'ACREAGE',
                    visible: true
                }]
            },
            1: {
                title: 'Inventory - Pro',
                fieldInfos: [{
                    fieldName: 'Classification',
                    visible: true
                }, {
                    fieldName: 'ACREAGE',
                    visible: true
                }]
            },
            2: {
                title: 'Inventory - Top',
                fieldInfos: [{
                    fieldName: 'Classification',
                    visible: true
                }, {
                    fieldName: 'ACREAGE',
                    visible: true
                }]
            },
            3: {
                title: 'Inventory - Abn',
                fieldInfos: [{
                    fieldName: 'Classification',
                    visible: true
                }, {
                    fieldName: 'ACREAGE',
                    visible: true
                }]
            },
        }
        //meetupHometowns: {
        //	0: {
        //		title: 'Hometowns',
        //		fieldInfos: [{
        //			fieldName: 'Location',
        //			visible: true
        //		}]
        //	}
        //},
        //louisvillePubSafety: {
        //	2: {
        //		title: 'Police Station',
        //		fieldInfos: [{
        //			fieldName: 'Name',
        //			visible: true
        //		}, {
        //			fieldName: 'Address',
        //			visible: true
        //		}, {
        //			fieldName: 'Type',
        //			visible: true
        //		}, {
        //			fieldName: 'Police Function',
        //			visible: true
        //		}, {
        //			fieldName: 'Last Update Date',
        //			visible: true
        //		}]
        //	},
        //	8: {
        //		title: 'Traffic Camera',
        //		description: '{Description} lasted updated: {Last Update Date}',
        //		mediaInfos: [{
        //			title: '',
        //			caption: '',
        //			type: 'image',
        //			value: {
        //				sourceURL: '{Location URL}',
        //				linkURL: '{Location URL}'
        //			}
        //		}]
        //	}
        //}
    }
});