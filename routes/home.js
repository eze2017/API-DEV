const express = require('express');
const router = express.Router();

router.get('/',(req,resp)=>{
    resp.render('index.pug',{tite: "My Express App", message: "hello"});
    
    }); 

module.exports =router;