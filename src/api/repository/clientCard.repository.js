const database = require('../../helpers/database.util.js')


const insertCard = async (clientId, checkingAccountNumber, card) => {
    const {number, holder, expiration, cvv, encryptedPassword, salt} = card
    const clientcardSql = `INSERT INTO clientcard (clientCardNumber, clientCod, checkingAccountNumber, clientcardHolder, clientcardPassword, clientcardSalt, clientcardExpirationDate, clientcardCVV)
    VALUES("${number}", ${clientId}, ${checkingAccountNumber}, "${holder}", "${encryptedPassword}", "${salt}", "${expiration}", ${cvv})`
    
    const result = await database.query(clientcardSql)
    return result[0]
}

const getUserCardData = async (cardNumber) => {
    return new Promise(async(resolve, reject) => {
        try{
            const sqlstatement = `SELECT * FROM clientcard WHERE clientcard.clientCardNumber = ${cardNumber}`

            const result = await database.query(sqlstatement)
            if(result.length === 0){
                throw new Error("Cartão não encontrado")
            }
            resolve(result[0])
        } catch(err){
            console.error(err)
            reject(err)
        }
    })
}

module.exports = {insertCard, getUserCardData}



