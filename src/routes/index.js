const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname+'/view/index.html'));
    //console.log(__dirname+'/view/index.html');
    //console.log(path.join(__dirname+'/view/index.html'))
    //res.render('index.ejs');
res.render('index.html', {title: 'Home'});
});
router.get('/contact',(req,res)=>{
    res.render('contact.html',{title: 'Contact'});
});
router.get('/about',(req,res)=>{
    res.render('about.html',{title:'about'})
});
module.exports = router;
