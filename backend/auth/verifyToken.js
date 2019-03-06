module.exports = function verifyToken(req, res, next) {
    const Header = req.headers.authorize
    if (typeof Header !== 'undefined') {
        const session = Header.split(' ')
        const sessionToken = session[1]
        req.token = sessionToken
        next()
    } else {
        res.sendStatus(403)
    }
}