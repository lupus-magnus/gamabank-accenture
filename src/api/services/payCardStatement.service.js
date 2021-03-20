const payCardStatement = require('../repository/payCardStatement.repository')
const {getClientCard} = require('../repository/clientCard.repository')

//month, creditCardNumber
//creditCardNumber, date, avaliableLimit
const creditCardStatement = async (date, clientCod) =>{
    
    try{
        const  {clientCardNumber, clientCreditCardLimitAvailable}  = await getClientCard(clientCod)
        const statements = await payCardStatement(clientCardNumber, date, clientCreditCardLimitAvailable)
        return statements
    }catch(err){
        throw err
    }


}

module.exports = creditCardStatement