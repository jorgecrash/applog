const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('Index');
});

router.get('/abaut',(req,res)=>{
    res.send('Bienvenido raton');
});
module.exports=router;