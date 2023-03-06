const jwt = require('jsonwebtoken');
const {register} = require("../controllers/registr")
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1];
        const register = jwt.verify(token,"jwtSecretKey" )
        const id = register.id;
        if (req.body.id && req.body.id !== id) {
            throw 'Invalid user token';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};


//  jwt.verify(token, config.get("jwtSecretKey"), (err, user)=>{
//     if (err) 
//         return res.status(401).json({message: "Unauthorized"})
//     req.decoded = user;
//     next();
// })}


module.exports  = auth;