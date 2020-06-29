// url del crud de notas
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

//recibir datos
router.post('notes/new-note',async (req,res) =>{
    //obtener titulo y descripcion como constantes
    const{title, description } = req.body;
    const errors =[];
    if(!title){
        errors.push({text: 'Por favor escriba un titulo'});
    }
    if(!description){
        errors.push({text: 'Por favor escriba una descripcion'});
    }
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        const newNote = new Note({ title, description });
        await newNote.save(); //await guarda en DB de forma asincrona
        res.redirect('/notes');
    }
});
//mostrar notes
router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({date:'desc'});
    res.render('notes/all-notes', {notes});
});

module.exports = router;