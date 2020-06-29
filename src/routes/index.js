//urls de paginas principales
const express = require('express');
//const express = require('express-handlebars');
const router = express.Router();

router.get('/', (req, res) =>{
    //res.send('Index');
    res.render('partials/index');
});
router.get('/about', (req, res) =>{
    //res.send('About');
    res.render('partials/about');
});


module.exports = router;
