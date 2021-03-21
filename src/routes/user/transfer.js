const transferHandler = require('../../api/controllers/userControllers/transfer.controller')
const { TransferRequestDTO } = require('../../api/models/dto/transfer.dto')
const Joi = require('joi')

const transfer = {
    method:'POST',
    path: '/user/transfer',
    handler: transferHandler,
    options: {
        tags: ['api', 'transfer'],
        description: 'Rota de realizar transferência para outra conta',
        notes: 'No caso de uma transferência para o mesmo banco, é necessário passar o token no header da requisição e, no body, é preciso informar o número da conta da outra pessoa (accAnother), o valor da transferência (value) e o CPF da outra pessoa(CPF). No caso de uma transferência para um cliente de outro banco, não é necessário passar o token no header da requisição, mas é preciso informar no body o número da conta de quem irá enviar o valor (acc), o código do banco da pessoa que receberá a transferência (bank), o número da conta da pessoa que receberá o valor (accAnother), o valor da transferência (value) e o CPF de quem irá receber a transferência (CPF). ',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string().optional()}).unknown(),
            payload: TransferRequestDTO
            
        },
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    }
}


module.exports = transfer