const menu = require('../database/menu.json');

const controlador ={
    index:(req, res, next)=> {
        res.render('index', {menu});
      }
}

module.exports = controlador;