
const pool = require('./../bd');
const uuid = require('uuid');
const mp = require('./../mercadopago');


async function comprar(idUsuario) {
    try {//se debe tomar del total de los productos pendientes correspondientes a un user
        // se debe insertar en la tabla compra ese total , token . usuario
        //se debe actualizar  la tabla carrito(actualizar id_carrito_compra con el id de la compra)
        //si se actualiza correctamente de se debe de generar  un  link  de pago y enviar un correo al usuario.
        let uuid_t = uuid();
        console.log(process.env.TABLA_CARRITO);
        console.log(process.env.TABLA_PRODUCTOS);
        console.log(process.env.TABLA_COMPRA);

        let queryCarrito = "SELECT sum(precio_producto) as total FROM ?? join ?? on id_producto_carrito = id_producto where id_compra_carrito is null and id_usuario_carrito = ?";
        const rowsCarrito = await pool.query(queryCarrito, [
            process.env.TABLA_CARRITO,process.env.TABLA_PRODUCTOS, idUsuario]);

        let monto = rowsCarrito[0].total;

        let obj = {
            id_usuario_compra : idUsuario,
            monto_compra : monto,
            token_compra : uuid_t
        }    

        const queryInsert = " insert into ?? set ? ";
        const rowsInsert = await pool.query(queryInsert, [ process.env.TABLA_COMPRA, obj]);


        let queryUpdate = "update ?? set id_compra_carrito = ?  where id_usuario_carrito = ? and id_compra_carrito is null";
        const rowsUpdate =  await pool.query(queryUpdate,[process.env.TABLA_CARRITO, rowsInsert.insertId, idUsuario]);
        
        //mercadopago objeto
        //items es un array de objetos que contiene todo lo requerido a la compra que se realizo . id , quantity
        let preference = {
            items : [
                {
                    id : rowsInsert.insertId,
                    title : 'compra e-commerce',
                    quantity : 1,
                    currency_id : 'ARS',
                    unit_price : monto
                }
            ],
            payer : {
                email :'emaildelquepaga@gmail.com'
            },
            notification_url : process.env.URL + "compra/" + uuid_t

            //ese token tiene que coincidir con el de la tabla
            //notification_url  es la url a la que mercado pago informara como salio la transaccion

        }
       
        let obj_mercadopago =  await mp.comprar(preference);
        console.log(obj_mercadopago);
        //
        return obj_mercadopago.body.sandbox_init_point;

        
        
    } catch (error) {
        throw error;
    }
}

module.exports = {comprar}