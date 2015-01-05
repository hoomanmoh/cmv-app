define([
	'esri/units',
	'esri/geometry/Extent',
	'esri/config',
	'esri/tasks/GeometryService',
	'esri/layers/ImageParameters',
    'esri/urlUtils'
], function (units, Extent, esriConfig, GeometryService, ImageParameters, urlUtils) {

    // url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
    esriConfig.defaults.io.proxyUrl = 'proxy/proxy.ashx';
    esriConfig.defaults.io.alwaysUseProxy = false;
    urlUtils.addProxyRule({
        urlPrefix: "https://elvgs03.dmz.ecl.local:6443",
        proxyUrl: "/viewer/proxy/proxy.ashx"
    });


    // url to your geometry server.
    esriConfig.defaults.geometryService = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

    //image parameters for dynamic services, set to png32 for higher quality exports.
    var imageParameters = new ImageParameters();
    imageParameters.format = 'png32';

    return {
        // used for debugging your app
        isDebug: true,

        //default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
        defaultMapClickMode: 'identify',
        // map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
        mapOptions: {
            basemap: 'hybrid',
            center: [-119, 35],
            zoom: 7,
            sliderStyle: 'small'
        },
        panes: {
            // 	left: {
            // 		splitter: true
            // 	},
            //right: {
            // 	id: 'sidebarRight',
            // 	placeAt: 'outer',
            // 	region: 'right',
            // 	splitter: true,
            // 	collapsible: true
            //},
            bottom: {
                id: 'sidebarBottom',
                placeAt: 'outer',
                splitter: true,
                collapsible: true,
                region: 'bottom'
            },
            top: {
                id: 'sidebarTop',
                placeAt: 'outer',
                collapsible: true,
                splitter: true,
                region: 'top'
            }
        },
        //collapseButtonsPane: 'center', //center or outer

        // operationalLayers: Array of Layers to load on top of the basemap: valid 'type' options: 'dynamic', 'tiled', 'feature'.
        // The 'options' object is passed as the layers options for constructor. Title will be used in the legend only. id's must be unique and have no spaces.
        // 3 'mode' options: MODE_SNAPSHOT = 0, MODE_ONDEMAND = 1, MODE_SELECTION = 2
        operationalLayers: [
       //{
       //	type: 'feature',
       //	url: 'http://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/MeetUpHomeTowns/FeatureServer/0',
       //	title: 'STLJS Meetup Home Towns',
       //	options: {
       //		id: 'meetupHometowns',
       //		opacity: 1.0,
       //		visible: true,
       //		outFields: ['*'],
       //		mode: 0
       //	},
       //	editorLayerInfos: {
       //		disableGeometryUpdate: false
       //	}
       //}, {
       //	type: 'feature',
       //	url: 'http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/SanFrancisco/311Incidents/FeatureServer/0',
       //	title: 'San Francisco 311 Incidents',
       //	options: {
       //		id: 'sf311Incidents',
       //		opacity: 1.0,
       //		visible: true,
       //		outFields: ['req_type', 'req_date', 'req_time', 'address', 'district'],
       //		mode: 0
       //	}
       //}, {
       //	type: 'dynamic',
       //	url: 'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyOperationalLayers/MapServer',
       //	title: 'Louisville Public Safety',
       //	options: {
       //		id: 'louisvillePubSafety',
       //		opacity: 1.0,
       //		visible: true,
       //		imageParameters: imageParameters
       //	},
       //	identifyLayerInfos: {
       //		layerIds: [2, 4, 5, 8, 12, 21]
       //	}
       //}, {
       //	type: 'dynamic',
       //	url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/DamageAssessment/MapServer',
       //	title: 'Damage Assessment',
       //	options: {
       //		id: 'DamageAssessment',
       //		opacity: 1.0,
       //		visible: true,
       //		imageParameters: imageParameters
       //	},
       //	layerControlLayerInfos: {
       //		swipe: true,
       //		metadataUrl: true,
       //		expanded: true
       //	}
       //}
        {
            type: 'feature',
            url: 'https://elvgs03.dmz.ecl.local:6443/arcgis/rest/services/CAC/Location/FeatureServer/0',
            title: 'Avocado Location',
            options: {
                id: 'avocadoLocation',
                opacity: 1.0,
                visible: true,
                outFields: ['Longitude', 'Latitude', 'GroveAPN', 'HandlerID', 'HandlerVendorID', 'CACGrowerID', 'CACGroveID', 'CACHandlerID'],
                mode: 0
            }
        }, {
            type: 'dynamic',
            url: 'https://elvgs03.dmz.ecl.local:6443/arcgis/rest/services/CAC/Inventory/MapServer',
            title: 'CAC Inventory',
            slider: true,
            noLegend: false,
            collapsed: false,
            options: {
                id: 'inventory',
                opacity: 0.7,
                visible: true,
                imageParameters: imageParameters
            },
            layerControlLayerInfos: {
                swipe: true
            }
        }, {
            type: 'dynamic',
            url: 'https://elvgs03.dmz.ecl.local:6443/arcgis/rest/services/CAC/CA_Watershed/MapServer',
            title: 'Watershed',
            slider: true,
            noLegend: false,
            collapsed: false,
            options: {
                id: 'watershed',
                opacity: 1.0,
                visible: true,
                imageParameters: imageParameters
            },
            layerControlLayerInfos: {
                swipe: true
            }
        }, {
            type: 'dynamic',
            url: 'https://elvgs03.dmz.ecl.local:6443/arcgis/rest/services/CAC/County_Data/MapServer',
            title: 'County Data/Parcels',
            slider: true,
            noLegend: false,
            collapsed: false,
            options: {
                id: 'countydata',
                opacity: 1.0,
                visible: true,
                imageParameters: imageParameters
            },
            layerControlLayerInfos: {
                swipe: true
            }
        }, {
            type: 'dynamic',
            url: 'https://elvgs03.dmz.ecl.local:6443/arcgis/rest/services/CAC/Boundary/MapServer',
            title: 'Jourisdiction Boundaries',
            slider: true,
            noLegend: false,
            collapsed: false,
            sublayerToggle: false, //true to automatically turn on sublayers
            options: {
                id: 'boundary',
                opacity: 0.5,
                visible: true,
                imageParameters: imageParameters
            },
            identifyLayerInfos: {
                layerIds: [2, 5, 8]
            },
            layerControlLayerInfos: {
                swipe: true
            }
        }
        ],
        // set include:true to load. For titlePane type set position the the desired order in the sidebar
        widgets: {
            navtools: {
                include: true, // false will not load widget
                id: 'navtools',
                type: 'contentPane', // can be contentPane
                canFloat: true, // if contentPane, use false
                path: 'gis/dijit/NavTools',
                title: 'Navigation Tools', // title will appear if type: titlePane
                open: false, // option only applies if type: titlePane
                position: 0, // use your position value as needed
                placeAt: 'top', // right or left if type: titlePane, can use top or bottom if type: contentPane
                options: { // map and mapClickMode are required to use the widget
                    map: true, // required
                    mapClickMode: true, // required
                    mapRightClickMenu: true // optional, can use right click context tools
                }
            },
            relatedRecords: {
                include: true,
                id: 'relatedRecords',
                position: 0,
                canFloat: true,
                open: true,
                type: 'contentPane',
                placeAt: 'bottom',
                path: 'gis/dijit/RelatedRecordTable',
                title: 'Related Records',
                options: 'config/relatedRecords'
            },
            growler: {
                include: true,
                id: 'growler',
                type: 'domNode',
                path: 'gis/dijit/Growler',
                srcNodeRef: 'growlerDijit',
                options: {}
            },
            geocoder: {
                include: true,
                id: 'geocoder',
                type: 'domNode',
                path: 'gis/dijit/Geocoder',
                srcNodeRef: 'geocodeDijit',
                options: {
                    map: true,
                    mapRightClickMenu: true,
                    geocoderOptions: {
                        autoComplete: true,
                        arcgisGeocoder: {
                            placeholder: 'Enter an address or place'
                        }
                    }
                }
            },
            identify: {
                include: true,
                id: 'identify',
                type: 'titlePane',
                path: 'gis/dijit/Identify',
                title: 'Identify',
                open: true,
                position: 3,
                options: 'config/identify'
            },
            basemaps: {
                include: true,
                id: 'basemaps',
                type: 'domNode',
                path: 'gis/dijit/Basemaps',
                srcNodeRef: 'basemapsDijit',
                options: 'config/basemaps'
            },
            mapInfo: {
                include: false,
                id: 'mapInfo',
                type: 'domNode',
                path: 'gis/dijit/MapInfo',
                srcNodeRef: 'mapInfoDijit',
                options: {
                    map: true,
                    mode: 'dms',
                    firstCoord: 'y',
                    unitScale: 3,
                    showScale: true,
                    xLabel: '',
                    yLabel: '',
                    minWidth: 286
                }
            },
            scalebar: {
                include: true,
                id: 'scalebar',
                type: 'map',
                path: 'esri/dijit/Scalebar',
                options: {
                    map: true,
                    attachTo: 'bottom-left',
                    scalebarStyle: 'line',
                    scalebarUnit: 'dual'
                }
            },
            locateButton: {
                include: false,
                id: 'locateButton',
                type: 'domNode',
                path: 'gis/dijit/LocateButton',
                srcNodeRef: 'locateButton',
                options: {
                    map: true,
                    publishGPSPosition: true,
                    highlightLocation: true,
                    useTracking: true,
                    geolocationOptions: {
                        maximumAge: 0,
                        timeout: 15000,
                        enableHighAccuracy: true
                    }
                }
            },
            overviewMap: {
                include: true,
                id: 'overviewMap',
                type: 'map',
                path: 'esri/dijit/OverviewMap',
                options: {
                    map: true,
                    attachTo: 'bottom-right',
                    color: '#0000CC',
                    height: 100,
                    width: 125,
                    opacity: 0.30,
                    visible: false
                }
            },
            homeButton: {
                include: true,
                id: 'homeButton',
                type: 'domNode',
                path: 'esri/dijit/HomeButton',
                srcNodeRef: 'homeButton',
                options: {
                    map: true,
                    extent: new Extent({
                        xmin: -130,
                        ymin: 30,
                        xmax: -109,
                        ymax: 44,
                        spatialReference: {
                            wkid: 4326
                        }
                    })
                }
            },
            legend: {
                include: true,
                id: 'legend',
                type: 'titlePane',
                path: 'esri/dijit/Legend',
                title: 'Legend',
                open: true,
                position: 0,
                options: {
                    map: true,
                    legendLayerInfos: true
                }
            },
            layerControl: {
                include: true,
                id: 'layerControl',
                type: 'titlePane',
                path: 'gis/dijit/LayerControl',
                title: 'Layers',
                open: true,
                position: 0,
                options: {
                    map: true,
                    layerControlLayerInfos: true,
                    separated: true,
                    vectorReorder: true,
                    overlayReorder: true
                }
            },
            bookmarks: {
                include: true,
                id: 'bookmarks',
                type: 'titlePane',
                path: 'gis/dijit/Bookmarks',
                title: 'Bookmarks',
                open: true,
                position: 2,
                options: 'config/bookmarks'
            },
            find: {
                include: false,
                id: 'find',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Find',
                title: 'Find',
                open: false,
                position: 3,
                options: 'config/find'
            },
            draw: {
                include: true,
                id: 'draw',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Draw',
                title: 'Draw',
                open: true,
                position: 4,
                options: {
                    map: true,
                    mapClickMode: true
                }
            },
            measure: {
                include: true,
                id: 'measurement',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Measurement',
                title: 'Measurement',
                open: true,
                position: 5,
                options: {
                    map: true,
                    mapClickMode: true,
                    defaultAreaUnit: units.SQUARE_MILES,
                    defaultLengthUnit: units.MILES
                }
            },
            print: {
                include: true,
                id: 'print',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Print',
                title: 'Print',
                open: true,
                position: 6,
                options: {
                    map: true,
                    printTaskURL: 'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
                    copyrightText: 'Copyright 2014',
                    authorText: 'Me',
                    defaultTitle: 'Viewer Map',
                    defaultFormat: 'PDF',
                    defaultLayout: 'Letter ANSI A Landscape'
                }
            },
            directions: {
                include: false,
                id: 'directions',
                type: 'titlePane',
                path: 'gis/dijit/Directions',
                title: 'Directions',
                open: true,
                position: 7,
                options: {
                    map: true,
                    mapRightClickMenu: true,
                    options: {
                        routeTaskUrl: 'http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route',
                        routeParams: {
                            directionsLanguage: 'en-US',
                            directionsLengthUnits: units.MILES
                        }
                    }
                }
            },
            editor: {
                include: false,
                id: 'editor',
                type: 'titlePane',
                path: 'gis/dijit/Editor',
                title: 'Editor',
                open: true,
                position: 8,
                options: {
                    map: true,
                    mapClickMode: true,
                    editorLayerInfos: true,
                    settings: {
                        toolbarVisible: true,
                        showAttributesOnClick: true,
                        enableUndoRedo: true,
                        createOptions: {
                            polygonDrawTools: ['freehandpolygon', 'autocomplete']
                        },
                        toolbarOptions: {
                            reshapeVisible: true,
                            cutVisible: true,
                            mergeVisible: true
                        }
                    }
                }
            },
            streetview: {
                include: true,
                id: 'streetview',
                type: 'titlePane',
                canFloat: true,
                position: 9,
                path: 'gis/dijit/StreetView',
                title: 'Google Street View',
                options: {
                    map: true,
                    mapClickMode: true,
                    mapRightClickMenu: true
                }
            },
            help: {
                include: true,
                id: 'help',
                type: 'floating',
                path: 'gis/dijit/Help',
                title: 'Help',
                options: {}
            }

        }
    };
});