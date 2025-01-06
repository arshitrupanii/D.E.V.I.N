import * as Userservices from '../services/user.service.js';
import { validationResult } from 'express-validator';


export const createcontroller = async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({error: error.array()});
    }

    try {
        const user = await Userservices.createUser(req.body.email, req.body.password);
        const token = user.generateAuthToken();
        res.status(201).json({user, token});
    }

    catch (error) {
        res.status(500).json({error: error.message});
    }

}
