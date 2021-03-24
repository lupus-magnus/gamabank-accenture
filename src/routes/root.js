
const root = {
    method:'GET',
    path: '/',
    handler: (req, h) => {
        return h.file("./public/index/index.html")
    }
}


module.exports = root
