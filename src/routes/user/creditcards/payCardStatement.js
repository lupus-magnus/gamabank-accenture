const payCardStatementHandler = require('../../../api/controllers/userControllers/creditcardControllers/payCardStatement.controller')
const {PayCreditStatementDTO} = require('../../../api/models/dto/paycreditstatement.dto')
const Joi = require('joi')

const billpayment = {
    method:'POST',

    path: '/user/creditcards/payment/{date}',
    handler: payCardStatementHandler,
    options: {
        tags: ['api', 'pay-creditcardstatements'],
        description: 'Rota para pagar as parcelas de uma compra no cartão de crédito',
        notes: 'Nessas rota, é imprescindível passar o body com as informações ',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
            payload: PayCreditStatementDTO
            
        },
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } 
}


module.exports = billpayment