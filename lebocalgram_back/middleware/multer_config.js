/**
 * multer_config.js - Middleware configuration  upload images
 */

/* Imports */
const multer = require("multer");

/* Variables & Constantes */
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

/* Middleware */

/* Const storage à passer à multer qui configure les options de stockage des images */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //enregistrement dans fichier uploads
    callback(null, "public/uploads");
  },

  filename: (req, file, callback) => {
    // nom du fichier et extension
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

/* Export accepte uniquement les images */
module.exports = multer({ storage: storage }).single("image");
