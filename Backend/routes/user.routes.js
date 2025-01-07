import { Router } from "express";
import * as Usercontroller from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();


router.post('/user', 
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    Usercontroller.createcontroller 
);

router.post('/login', 
    body('email').isEmail()
)


export default router;