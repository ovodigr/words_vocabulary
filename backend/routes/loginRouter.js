import { Router } from "express";
import cors from "cors";
import UserLoginConroller from "../controllers/UserLoginConroller.js";

const loginRouter = new Router();

const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, DELETE')
    next()
}

loginRouter.use(corsMiddleware)

loginRouter.post('/create/', UserLoginConroller.create);

export default loginRouter;
