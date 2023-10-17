const jwt = require('jsonwebtoken');

// placed secret in .env file
const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        
        if (token) {
            // split token into string array
            const list = token.split(' ');
            const type = list[0];
            token = list[1].trim();

            // check token type, if there is no token, return request object as is
            if (type !== 'Bearer') {
                return req;
            }
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}

