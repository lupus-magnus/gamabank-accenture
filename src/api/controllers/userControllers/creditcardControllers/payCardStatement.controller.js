const creditCardStatement = require('../../../services/payCardStatement.service')
const { getUserTokenData } = require('../../../services/userTokenData.service')

const payCardStatementHandler = async (request, h) => {
    const token = request.headers['x-access-token']
    if(token){
        try{
            const {date} = request.payload
            const { clientCod } = await getUserTokenData(token)
            const cardStatement = await creditCardStatement(date, clientCod)
            return cardStatement
        }catch(err){
            return err.message
        }

    }
}

module.exports = payCardStatementHandler