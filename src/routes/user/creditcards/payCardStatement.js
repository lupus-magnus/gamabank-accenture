const payCardStatementHandler = require('../../../api/controllers/userControllers/creditcardControllers/payCardStatement.controller')
const billpayment = {
    method:'POST',
    path: '/user/creditcards/{id}/{yyyymm}/pay',
    handler: payCardStatementHandler,
   /*  options: {
        tags: ['api', 'transfer'],
        description: 'Rota de transferência',
        notes: 'Anotações da rota...',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
            payload: TransferRequestDTO
            
        },
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } */
}


module.exports = billpayment