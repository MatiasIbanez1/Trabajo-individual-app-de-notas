

const usuarioControllers ={
    recuperarContrasena:(req,res) =>{
        let title = "Recuperar Contraseña";
        res.render('usuario/recuperarContrasena',{title:title})
    },
    registro:(req,res) =>{
        let title = "Registrarse";
        res.render('usuario/registro',{title:title})
    }
}
module.exports = usuarioControllers