const express=require('express');
const router=express.Router();
router.get('/notes',(req,res)=>{
    res.send('Notas de la Base de Datos');
});
module.exports=router;