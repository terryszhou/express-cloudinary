// MODULE SETUP ----------------
require('dotenv').config()
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var multer = require('multer')
var upload = multer({ dest: './uploads/'})
var cloudinary = require('cloudinary')

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
  res.send(req.file)
})

// LISTEN TO PORT ----------------
app.listen(5000);
