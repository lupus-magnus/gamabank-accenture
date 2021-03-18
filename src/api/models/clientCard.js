class ClientCard{
    constructor(number, holder, expiration, cvv, password, encryptedPassword, salt){
        this.number = number,
        this.holder = holder ,
        this.expiration = expiration,
        this.cvv = cvv,
        this.password = password,
        this.encryptedPassword = encryptedPassword,
        this.salt = salt
    }
}

module.exports = ClientCard