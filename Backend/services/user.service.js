import Usermodel from '../models/user.model.js';


export const createUser = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and Password are required');
    }
    const hashPassword = await Usermodel.hashPassword(password);

    const user = await Usermodel.create({email, password: hashPassword});

    return user;

}


