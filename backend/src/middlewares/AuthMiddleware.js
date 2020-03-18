const auth = require('../utils/auth');
const jwt = require('jsonwebtoken');
const message = require('../utils/message_PTBR');

module.exports = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    const parts = authHeader.split(' ');

    const [token] = parts;

    jwt.verify(token, auth.secret, (err, decoded) => {
        if (err)
            return res.status(401).json({ error: message.tokenInvalido });

        req.userId = decoded.id;

        return next();
    });

};