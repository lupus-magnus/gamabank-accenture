const {sendMailFunction} = require('../../helpers/mail')
const { signUpEmail, paidInstallmentEmail, creditCardEntryEmail, paidDebitEmail } = require('../models/emails')

//ENTRADAS: receiverInfo: email, nome, numero do cartao
/* SignUp: 
ClientCard {
    number: '4273911551980543',
    holder: 'JUNIO ',
    expiration: '11/25',
    cvv: '809',
    password: '359614',
    encryptedPassword: '$2b$10$XFp./8wjOaVEnMooS0rg0.RpapYTqosd6Rh.ibA0oE8/BXz3bNLbi',
    salt: '$2b$10$XFp./8wjOaVEnMooS0rg0.'
  } */

const sendSignupEmail = async (receiverInfo) => await sendMailFunction(receiverInfo.clientEmail, signUpEmail(receiverInfo)) // TO: email, nome, senha do cartao, numero do cartao, accountNumber,  
const sendPaidInstallmentEmail = async (receiverInfo) => await sendMailFunction(receiverInfo, paidInstallmentEmail(fakeUser))
const sendCreditCardEntryEmail = async (receiverInfo) => await sendMailFunction(receiverInfo.clientData.clientEmail, creditCardEntryEmail(receiverInfo))
const sendPaidDebitEmail = async (receiverInfo) => await sendMailFunction(receiverInfo.email, paidDebitEmail(receiverInfo))
//Após configuradas as variáveis de ambiente, podemos setar no modelo o HTML de cada um (:

//Testes:
const fakeUser = {
    name:"Heleninha",
    email:'helenao@furacao.br', 
    checkingAccountEntryValue:'R$250,00', 
    cardNumber: '1234567890131415'
}
//sendSignupEmail(fakeUser.email)   ✅ 
//sendPaidInstallmentEmail(fakeUser.email) // ✅ 
//sendCreditCardEntryEmail(fakeUser.email) // ✅ 


module.exports = { sendSignupEmail, sendPaidInstallmentEmail, sendCreditCardEntryEmail, sendPaidDebitEmail }
