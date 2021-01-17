const jwt = require('jsonwebtoken')


const requireAuth = (req, res, next)=>{
    const token = req.cookie.jwt;

    // check json webtoken exist and it's verified
    if(token){
        jwt.verify(token, 'net ninja secret', (err, decodedToken)=> {
            if(err){
                // res.redirect('/login')
                res.redirect('/user/login');
            }else{
                next();
            }
        })
    }else{
        res.redirect('/user/login');
    }
}