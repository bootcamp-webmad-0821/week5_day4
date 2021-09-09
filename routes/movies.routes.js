const router = require("express").Router()
const { localUpload, CDNupload } = require("../config/upload.config")
const Movie = require("../models/Movie.model")



router.get('/galeria', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('movies/gallery', { movies }))
        .catch(err => console.log(err))
})



router.get('/crear-local', (req, res) => res.render('movies/form-local'))

router.post('/crear-local', localUpload.single('cover'), (req, res) => {

    const { title, year } = req.body

    console.log('Objeto file de Multer:', req.file)

    Movie
        .create({
            title,
            year,
            cover: `/uploads/${req.file.filename}`,
            originalCover: req.file.originalname
        })
        .then(() => res.redirect('/peliculas/galeria'))
        .catch(err => console.log(err))
})



router.get('/crear-cdn', (req, res) => res.render('movies/form-cdn'))

router.post('/crear-cdn', CDNupload.single('cover'), (req, res) => {

    const { title, year } = req.body

    console.log('Objeto file de Multer:', req.file)

    Movie
        .create({
            title,
            year,
            cover: req.file.path,
            originalCover: req.file.originalname
        })
        .then(() => res.redirect('/peliculas/galeria'))
        .catch(err => console.log(err))
})


module.exports = router