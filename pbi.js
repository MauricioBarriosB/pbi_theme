/* -------- INIT VARS: --------  */

var fs = require('fs');

const themeName = 'bupa_pbi_theme';

/* -------- INIT COLOR VARS: --------  */

const foreground = '#FFFFFF';

const background = '#FFFFFF';

const headerTh = '#00335B';

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

const dataColorTest = [
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

const fontFamily = 'Arial'; // 'Segoe UI'

const fontColor = '#373f51';

const fontColorHtd = '#FFFFFF';

/* -------- FILL THEME OBJECT WITH DATA: -------- */

var themeObject = {
    "name": themeName,
    "dataColors": dataColors,

    "visualStyles": {
        "*": {
            "*": {
                "*": [{
                    "fontSize": 12,
                    "fontFamily": fontFamily
                }],
                "title": [{
                    "show": true,
                    "fontColor": {
                        "solid": {
                            "color": background
                        }
                    },
                    "background": {
                        "solid": {
                            "color": headerTh
                        }
                    },
                    "allignment": "center"
                }],
                "background": [{
                    "show": true,
                    "color": {
                        "solid": {
                            "color": background
                        }
                    },
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
                    "fontColor": {
                        "solid": {
                            "color": fontColor
                        }
                    }
                }]
            }
        },
        "page": {
            "*": {
                "background": [{
                    "color": {
                        "solid": {
                            "color": background
                        }
                    },
                    "transparency": 0
                }]
            }
        },


        "textbox": {
            "*": {
                "background": [{
                    "show": true,
                    "color": { "solid": { "color": "#DDDDDD" } },
                    "transparency": 0
                }],
                "visualHeader": [{
                    "show": true
                }]
            }
        }
    }
}

/* -------- CONVERT TO JSON -> WRITE FILE: -------- */

fs.writeFile('./output/' + themeName + '.json', JSON.stringify(themeObject, null, 4), (error) => {
    if (error) {
        console.error(error);
        return;
    };
    console.log('File : ' + themeName + '.json -> has been created');
});