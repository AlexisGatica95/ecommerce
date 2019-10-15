

const mp = require('mercadopago');

//sandbox - es un modo de prueba (credencuales de prueba ) no te saca guita ahre

//TEST-4001049271921418-101512-62ddc0b78561b273749f7eb599eb0554-208457994

mp.configure({
    sandbox : true ,
    access_token : 'TEST-4001049271921418-101512-62ddc0b78561b273749f7eb599eb0554-208457994'
});




//preference : total, mail del usuario, url comprobar
//http://miwebparaadministarrdaddyes.com.ar/compra/acagenerounUUID72384-234324  cuando genero un pago le aviso a esta url le mando un token 

async function comprar(preference) {
    try {
        //preference es un objeto con datos de la compra
        //comprar -- compraModel
       return await mp.preferences.create(preference) 
    } catch (error) {
        throw error;
    }
}

module.exports = {comprar};