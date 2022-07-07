import jwt from 'jsonwebtoken';

import User from '../database/models/user.model';
import status  from '../helpers/status-codes'

const { CREATED, OK, BAD_REQUEST, UNAUTHORIZED } = status;

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    
    const userExists = await _userExists(email);
    if(userExists) return res.json({ success: false, message: 'User already exists' }).status(BAD_REQUEST);
    const user = new User({ name, email, password });
    try{
        const savedUser = await user.save();
        return res.json({ success: true, message: 'User created successfully', data: savedUser }).status(CREATED);
    }
    catch(err){
        return res.json({ success: false, message: 'Error creating user', error: err }).status(BAD_REQUEST);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await _getUser(email);
    if(!user) return res.json({ success: false, message: 'Invalid credentials' }).status(UNAUTHORIZED);
    if(user.password !== password) return res.json({ success: false, message: 'Invalid credentials' }).status(UNAUTHORIZED);
    
    const {name, _id } = user;
    const token = _jwtSigner({ _id, email, name });
    return res.json({ success: true, message: 'User logged in successfully', data: { token } }).status(OK);
}

export const getProfile = async (req, res) => {
    return res.json({ success: true, data: { user: req.user } }).status(OK);
}

const _userExists = async (email) => {
    let user;
    try{
        user = await User.findOne({ email });
    }
    catch(err){
        return false;
    }
   if(user) return true;
   return false;
}

const _getUser = async (email) => {
    let user;
    try{
        user = await User.findOne({ email });
    }
    catch(err){
        return false;
    }
   if(user) return user;
   return false;
}

const _jwtSigner = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
}