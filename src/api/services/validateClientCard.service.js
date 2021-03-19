const {getUserCardData} = require('../repository/clientCard.repository')
const mycripto = require('../../helpers/mycripto')
// dado do cliente do cartão
// dado do payload

const validateCardData = async (creditCard, dataBaseCardData) => {
    try{
        console.table(dataBaseCardData.salt)

        //validando password
        creditCard.password = await mycripto.encryptPassword(creditCard.password, dataBaseCardData.salt)
        if(mycripto.comparePassword(creditCard.password, dataBaseCardData.salt, dataBaseCardData.password)) throw new Error("Senha incorreta.")

        //validando cvv
        if(creditCard.cvv !== dataBaseCardData.cvv) throw new Error("Não foi possível validar o cartão, dados incorretos")
        //validando holder
        if(creditCard.holder !== dataBaseCardData.holder) throw new Error("Não foi possível validar o cartão, dados incorretos")
        //validando validade
        if(creditCard.expiration !== dataBaseCardData.expiration) throw new Error("Não foi possível validar o cartão, dados incorretos")
        const splited = creditCard.expiration.split("/")
        for(let i in splited){
            splited[i] = Number(splited[i])
        }
        const [month, year] = splited
        const actualMonth = (new Date()).getMonth() + 1
        const actualYear = Number((new Date().getFullYear()).toString().slice(2,4))
        if(year<actualYear) throw new Error("ano invalido")
        if(year === actualYear && month < actualMonth) throw new Error("mes invalido")
    }catch(err){
        throw err
    }    

}

module.exports = validateCardData