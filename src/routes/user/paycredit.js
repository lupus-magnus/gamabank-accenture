const paycreditHandler = require('../../api/controllers/userControllers/paycredit.controller')
const {PayCreditDTO} = require('../../api/models/dto/paycredit.dto')
const Joi = require('joi')

const paycredit = {
    method:'POST',
    path: '/user/paycredit',
    handler: paycreditHandler,
    options: {
        tags: ['api', 'credit'],
        description: 'Rota de lançamento de crédito',
        notes: 'Anotações da rota...',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
            payload: PayCreditDTO
            
        },
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } 
}


module.exports = paycredit