const { Router }=require('express');
const { usuariosGet,usuariosPost,usuariosPut,usuariosDel,usuariosPatch } = require('../controllers/usuarios');
const router=Router()

router.get( '/', usuariosGet ); 
router.post( '/', usuariosPost ); 
router.put( '/:id', usuariosPut); 
router.delete( '/', usuariosDel ); 
router.patch( '/', usuariosPatch ); 
    
  
  
  module.exports=router;