const { newDebitExpenses } = require('../../services/debitExpense.service')
const { getUserTokenData } = require('../../services/userTokenData.service')
const CheckingTransaction = require('../../models/checkingTransaction')
const {verify} = require('../../services/auth.service')
const {sendPaidDebitEmail} = require('../../services/email.service')

const paydebitHandler = async (request, h) => {
    const token = request.headers['x-access-token']
    const {data} = await verify(token)
    const emailTarget = data.username
    if (token) {
        try {
            const { value, description } = request.payload
            const { checkingAccountNumber } = await getUserTokenData(token) // dados out cpf e ContaDestino
            const transferData = new CheckingTransaction({ description, account: checkingAccountNumber, value, bank: 999 })
            const emailData = {
                email: emailTarget,
                value,
                description
            }
            console.log(emailData)
            await sendPaidDebitEmail(emailData)
            return await newDebitExpenses(transferData) 

        } catch (err) {
            return err.message
        }
    }
}

module.exports = paydebitHandler