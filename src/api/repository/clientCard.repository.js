const database = require('../../helpers/database.util.js')


const insertCard = async (clientId, checkingAccountNumber, card) => {
    const {number, holder, expiration, cvv, encryptedPassword, salt} = card
    const clientcardSql = `INSERT INTO clientcard (clientCardNumber, clientCod, checkingAccountNumber, clientcardHolder, clientcardPassword, clientcardSalt, clientcardExpirationDate, clientcardCVV)
    VALUES("${number}", ${clientId}, ${checkingAccountNumber}, "${holder}", "${encryptedPassword}", "${salt}", "${expiration}", ${cvv})`
    
    const result = await database.query(clientcardSql)
    return result[0]
}

module.exports = {insertCard}



