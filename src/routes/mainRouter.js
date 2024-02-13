const express = require('express'); // Requerimos el módulo express
const router = express.Router(); // Ejecutamos el módulo Router
const mainController = require('../controllers/mainController'); // Requerimos el controlador
const path = require('path') // Requerimos el módulo path
const multer = require('multer') // Requerimos el módulo multer

const storage = multer.diskStorage({ // Configuramos multer  
    destination: (req, file, cb) => { // Definimos el destino de la imagen
        cb(null, path.resolve(__dirname, '../../public/img')) // Definimos la ruta
    },
    filename: (req, file, cb) => { // Definimos el nombre de la imagen
        let imageName = Date.now() + path.extname(file.originalname); // Definimos el nombre de la imagen
        cb(null, imageName); // Retornamos el nombre de la imagen
    }
})
const fileUpload = multer({storage: storage}) // Ejecutamos multer

router.get('/', mainController.showHome); // Ruta para mostrar la vista home.ejs

module.exports = router