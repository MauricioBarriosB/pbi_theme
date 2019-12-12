/* -------- INIT VARS: --------  */

var image2base64 = require('image-to-base64');

var fs = require('fs');

const themeName = 'bupa_pbi_theme';

const urlBackgroundPNG = 'img/bg_bupa_indicadores_1280x720_72dpi.png';

/* -------- INIT COLOR VARS: --------  */

const backgrAlpha = 0;

const foreground = '#FFFFFF';

const background = '#FFFFFF';

const headerTh = '#00335B';

const backgrGraph = '#F1EFEB';

const borderGraph = '#00335B';

const dataColors = [
    "#0079C8",
    "#6A2CA1",
    "#a4219b",
    "#DB3907",
    "#942151",
    "#C1265D",
    "#178d96",
    "#C6007E",
    "#007780"
];

const dataColorsNO = [
    "#0069aa",
    "#4f8dc2",
    "#9ab7da",
    "#cedaec",
    "#00c762",
    "#fbe7a6",
    "#ff544a",
    "#f89a1c",
    "#545451"
];


/* -------- INIT FONT TEXT VARS: --------  */

const fontFamily = 'Segoe UI'; // Times New Roman // Segoe UI

const fontColor = '#373f51';

const fontColorHtd = '#FFFFFF';



/* -------- FILL THEME OBJECT WITH DATA: -------- */

function imageBGbase64() {
    image2base64(urlBackgroundPNG).then(
        (response) => {
            var backgroundPNG = 'data:image/png;base64,' + response;
            fillThemeObject(backgroundPNG);
        }
    ).catch((error) => {
        console.error(error);
    });
};

function fillThemeObject(backgroundPNG) {
    var themeObject = {
        "name": themeName,
        "dataColors": dataColors,

        "visualStyles": {
            "tableAccent": "#123456",
            "*": {
                "*": {

                    "*": [{
                        "fontSize": 11,
                        "fontFamily": fontFamily
                    }],

                    "title": [{
                        "fontSize": 10,
                        "show": true,
                        "fontColor": { "solid": { "color": background } },
                        "background": { "solid": { "color": headerTh } },
                        "allignment": "center"
                    }],

                    "background": [{
                        "show": true,
                        "color": { "solid": { "color": background } },
                        "transparency": 0
                    }],

                    "lockAspect": [{
                        "show": true
                    }],

                    "border": [{
                        "show": false
                    }],

                    "visualTooltip": [{
                        "type": "Default"
                    }],

                    "stylePreset": [{
                        "name": "None"
                    }],

                    "labels": [{
                        "fontColor": { "solid": { "color": fontColor } }
                    }]
                }
            },

            "page": {
                "*": {
                    "background": [{
                        "image": {
                            "name": "Wallpaper",
                            "scaling": "Fit",
                            "url": backgroundPNG
                        },
                        "transparency": 0
                            /*
                            "color": {
                                "solid": {
                                    "color": background
                                }
                            },
                            "transparency": 0
                            */
                    }]

                    /*
                    "outspace": [{
                        "image": {
                            "name": "Wallpaper", 
                            "scaling": "Fit",
                            "url": backgroundPNG
                        },
                        "transparency": 0
                    }]
                    */
                }
            },

            "lineChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "pieChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "areaChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "scatterChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "waterfallChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "barChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "clusteredBarChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "columnChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "clusteredColumnChart": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "pivotTable": {
                "*": {
                    "background": [{
                        "color": { "solid": { "color": backgrGraph } },
                        "transparency": backgrAlpha
                    }],
                    "border": [{
                        "show": true,
                        "color": { "solid": { "color": borderGraph } }
                    }]
                }
            },

            "textbox": {
                "*": {
                    "background": [{
                        "show": true,
                        "color": { "solid": { "color": background } },
                        "transparency": 0
                    }],
                    "visualHeader": [{
                        "show": true,
                    }]
                }
            }
        }
    }
    fsWriteFile(themeObject);
};


/* -------- CONVERT TO JSON -> WRITE FILES : -------- */

function fsWriteFile(themeObject) {
    fs.writeFile('./output/' + themeName + '.json', JSON.stringify(themeObject, null, 4), (error) => {
        if (error) {
            console.error(error);
            return;
        } else {
            console.log('File : ' + themeName + '.json FILE -> has been created!');
        }
    });
}

imageBGbase64();