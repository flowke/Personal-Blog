
const express = require('express');

const router = express.Router()

router.get('/', (req, res, next)=>{
    res.sendFile('./app/view/index.html',{root: __dirname});
} );
