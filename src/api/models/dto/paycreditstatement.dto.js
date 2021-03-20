const Joi = require('joi');


const PayCreditStatementDTO = Joi.object({
    data: Joi.string().required(),

}).label('PayCreditStatementDTO')


module.exports = { PayCreditStatementDTO }