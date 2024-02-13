const { validationResult } = require('express-validator');
const fs = require('fs'); // Requerimos el módulo File System de Node
const path = require('path'); // Requerimos el módulo Path de Node
//const productos = JSON.parse(fs.readFileSync(path.resolve('./src/database/product.json'))); // Lee el archivo JSON
//const rutaArchivo = path.resolve('./src/database/product.json'); // Ruta del archivo JSON
//const db = require('../database/models')
//const OP = db.Sequelize.Op

module.exports = {
    showHome: (req, res) => {
        return res.render('home')
    }
}