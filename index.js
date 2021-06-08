// MODULE SETUP ----------------
require('dotenv').config()
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var multer = require('multer')
var upload = multer({ dest: './uploads/'})
var cloudinary = require('cloudinary');
const { request, response } = require('express');

// MIDDLEWARE ----------------
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// ROUTES ----------------

// GET / HOME PAGE
app.get('/', function(req, res) {
  res.render('index');
});

// POST / FILE UPLOAD
app.post('/', upload.single('myFile'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (result) => {
    var imageId = `${result.public_id}.jpg`
    var src = cloudinary.image(imageId, {effect: "grayscale"})
    console.log(src)
    res.render('image', {imgSrc: src})
  })
})

// LISTEN TO PORT ----------------
app.listen(5000);
