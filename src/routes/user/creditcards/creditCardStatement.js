const creditCardStatementHandler = require('../../../api/controllers/userControllers/creditcardControllers/creditCardStatement.controller')
const Joi = require('joi')

const creditcardbill = {
    method:'GET',
    path: '/user/creditcards/{date}', // ?timeinterval = timestamp
    handler: creditCardStatementHandler,
    /* options: {
        tags: ['api', 'credit'],
        description: 'Rota de pagamento de fatura ',
        notes: 'Anotações da rota...',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
        },
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    }  */
}


module.exports = creditcardbill