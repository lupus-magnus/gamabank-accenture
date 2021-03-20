const nodemailer = require("nodemailer");
const configs = require('../configs/env')


const setup = async () => {  
    let account
    let accountPromise = new Promise (async (resolve, reject) => {
        
        if(configs.env === 'test' || configs.env === 'development'){
            account = await nodemailer.createTestAccount()
            //console.log("AQUI TEM O ACCOUNT FAKE ------>",account)
            resolve(account)
        }
        resolve(0)
    })

    account = await accountPromise
    console.log("Account fora da promise --->", account)

    const transporter = nodemailer.createTransport({

        host: account ? "smtp.ethereal.email" : configs.mail.host, //https://ethereal.email/
        port: account ? 587 : configs.mail.port,
        secure: false,
        auth: {
            user: account ? account.user : configs.mail.user,
            pass: account ? account.pass : configs.mail.pass
        },
        
    })

    return transporter
}

async function sendMailFunction(to, emailModel) {
    const transporter = await setup()
// mudar pra model de produção esse info
  let info = await transporter.sendMail({
    from: '"HelloBank😎" <foo@example.com>', // sender address
    to: to, // list of receivers
    subject: emailModel.subject, // Subject line
    text: emailModel.text, // plain text body
    html: emailModel.html, // html body
  });
  //A linha abaixo só roda se a função for chamada em modo teste ou desenvolvimento.
  if((configs.env === 'test' || configs.env === 'development')) console.log("\n Preview URL: %s", nodemailer.getTestMessageUrl(info),"\n");
}

module.exports = {sendMailFunction}
