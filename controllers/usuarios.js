const {response,request}=require('express')
    

const usuariosGet=(req=request, res=response)=> {
    const {q, nombre='No name',apiKey,limit, page=1}=req.query;

    res.json({
        
        msg: 'get API-controlador',
        q,
        nombre,
        apiKey,
        limit,
        page
    });
  }
const usuariosPost=(req, res=response)=> {
    const {nombre, edad}=req.body;
    res.json({
        
        msg: 'post API-controlador',
        nombre, edad
    });
  }
  const usuariosPut=(req, res=response)=> {
    const id=req.params.id;
    res.json({
        
        msg: 'put API-controlador',
        id
    });
  }
  const usuariosDel=(req, res=response)=> {
    res.json({
        
        msg: 'delete API-controlador'
    });
  }
  const usuariosPatch=(req, res=response)=> {
    res.json({
        
        msg: 'patch API-controlador'
    });
  }



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDel
}