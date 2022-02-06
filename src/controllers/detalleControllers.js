const menu = require('../database/menu.json')
const controlador ={
    detalle: (req, res, next)=> {
        let id = req.params.id;
        const idMenu = menu.find(e=> {
            return e.id === +id
        })
        
        res.render('detalleMenu',{idMenu});
      }
}

module.exports = controlador;