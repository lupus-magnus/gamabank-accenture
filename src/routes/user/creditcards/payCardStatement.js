const payCardStatementHandler = require('../../../api/controllers/userControllers/creditcardControllers/payCardStatement.controller')
const billpayment = {
    method:'POST',

    path: '/user/creditcards/payment/{date}',
    handler: payCardStatementHandler,
}


module.exports = billpayment