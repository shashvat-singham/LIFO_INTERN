const {expressjwt: jwt} = require('express-jwt');

const config = require('../config');

function authJwt() {
    const secret = config.jwtSecret;
    const api = config.apiUrl;
    return jwt({
        secret,
        algorithms: [ 'HS256' ],
        isRevoked: isRevoked
    }).unless({
        path: [
            { url: /\/public\/uploads(.*)/, methods: ["GET", "OPTIONS", "POST"] },
            { url: /\/api\/v1\/restaurant(.*)/, methods: ["GET", "OPTIONS"] },
            `${api}/user/login`,
            `${api}/user/register`,
            { url: /\/api\/v1\/order(.*)/, methods: ["GET", "PUT", "POST", "DELETE"] },
            { url: /\/api\/v1\/dish(.*)/, methods: ["GET", "PUT", "POST", "DELETE"] },
        ]
    })
}

async function isRevoked(req, token)
{
    if(parseInt(token.payload.user_type) == 1){
        return true;
    }
    return false;
}

module.exports = authJwt;