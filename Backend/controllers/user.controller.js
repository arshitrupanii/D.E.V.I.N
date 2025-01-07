import * as Userservices from '../services/user.service.js';
import { ExpressValidator, validationResult } from 'express-validator';
import Usermodel from '../models/user.model.js';


export const createcontroller = async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const user = await Userservices.createUser(req.body.email, req.body.password);
        const token = user.generateAuthToken();
        res.status(201).json({ user, token });
    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export const logincontroller = async (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    try {
        const { email, password } = req.body

        const user = await Usermodel.findOne({ email }).select("+password")

        if (!user) {
            return res.status(401).json({
                error: "unable to login incorrect email address...."
            })
        }
    

        const isMatch = await Usermodel.comparePassword(password)
        
        if (!isMatch) {
            return res.status(401).json({
                error: "unable to login incorrect password...."
            })
        }

        const token = await Usermodel.generateAuthToken()

        res.status(200).json({user, token})
    } 
    
    catch (error) {
        console.log(error)
        return res.status(400).send(error.message)
    }
}