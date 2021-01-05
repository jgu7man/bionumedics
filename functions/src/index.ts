import * as functions from 'firebase-functions';
import * as mercadopago from "mercadopago";
import { MercadopagoRequest } from './models/mercadopago.model';


exports.mercadopago = functions.https.onCall( ( request: MercadopagoRequest, context ) => {
    
    mercadopago.configure( {
        access_token: request.access_token
    } )
    return mercadopago.preferences.create( { items: request.items, auto_return: 'approved', back_urls: request.back_urls} )
        .then( ( response ) => response )
        .catch( ( error ) => error )
})