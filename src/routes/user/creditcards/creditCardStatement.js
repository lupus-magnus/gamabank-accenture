const creditCardStatementHandler = require('../../../api/controllers/userControllers/creditcardControllers/creditCardStatement.controller')
const Joi = require('joi')

const creditcardbill = {
    method:'GET',
    path: '/user/creditcards/{date}', // ?timeinterval = timestamp
    handler: creditCardStatementHandler,
    options: {
        tags: ['api', 'credit-statement'],
        description: 'Rota para pegar a fatura do cartão de crédito ',
        notes: 'Nessa rota, é importante inserir o token no Header',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
        },
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } 
}


module.exports = creditcardbill