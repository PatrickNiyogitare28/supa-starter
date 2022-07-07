import jwt from 'jsonwebtoken';
import statusCodes from "../helpers/status-codes";
const { OK, BAD_REQUEST, UNAUTHORIZED } = statusCodes;

export const AuthMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) return res.json({ success: false, message: 'Token required' }).status(UNAUTHORIZED);
    const [, token] = authorization.split(' ');
    if(!token) return res.json({ success: false, message: 'Token required' }).status(UNAUTHORIZED);
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        console.log(err)
        return res.json({ success: false, message: 'Invalid token' }).status(UNAUTHORIZED);
    }
}