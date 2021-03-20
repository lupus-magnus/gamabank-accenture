
const root = {
    method:'GET',
    path: '/',
    handler: (req, h) => {
       return h.redirect("https://github.com/paulotelles/gamabank-accenture")
    }
}


module.exports = root
