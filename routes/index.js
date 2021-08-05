const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const Contact = require('../models/Contacts');
const Email = require('../models/Email');

router.get('/', (req,res)=>{
    res.render('index');
});
router.get('/article1', (req,res)=>{
    res.render('./articles/article1');
});
router.get('/article2', (req,res)=>{
    res.render('./articles/article2');
});
router.get('/article3', (req,res)=>{
    res.render('./articles/article3');
});
router.get('/article4', (req,res)=>{
    res.render('./articles/article4');
});
router.get('/healthyfamilies', (req,res)=>{
    res.render('./articles/healthyfamilies');
});
router.get('/surgeries', (req,res)=>{
    res.render('./articles/surgeries');
});
router.get('/form1', (req,res)=>{
    res.render('./forms/form1');
});
router.get('/form2', (req,res)=>{
    res.render('./forms/form2');
});
router.get('/realisations', (req,res)=>{
    res.render('./forms/realisations');
});


router.post('/', (req,res)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const contact = new Contact(req.body);
        contact.save()
        .then(() => {
            res.render('index');
        })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
        })
    }
    else{
        res.send('Sorry! Something went wrong.');
    }

    console.log(req.body);
})

router.post('/form1', [
    check("email").isLength({ min: 1 }).withMessage("Please enter an email"),
        ],(req,res)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const email = new Email(req.body);
        email.save()
        .then(() => {
            // res.render('/form2');
            res.render('./forms/form2')
        })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
        })
    }
    else{
        res.send('Sorry! Something went wrong.');
    }

    console.log(req.body);
})
module.exports = router;