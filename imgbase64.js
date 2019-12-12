// ** Import Node packages: npm i -S image-to-base64

var image2base64 = require('image-to-base64');


const urlImagen = 'img/bg_bupa_indicadores_1280x720_72dpi.png';

image2base64(urlImagen).then(
    (response) => {
        console.log(response);
    }
).catch(
    (error) => {
        console.error(error);
    }
)