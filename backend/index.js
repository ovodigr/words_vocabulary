import cookieSession from "cookie-session";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import passportSetup from "./auth/passportSetup.js";

import router from "./routes/router.js";
import passRouter from "./routes/passportRouter.js";
import cors from "cors";

import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_DB_URL } = process.env;

const Port = 8080;

const app = express();

passportSetup();

app.use(cookieSession(
    {
        name: 'session',
        keys: ['wwwww'],
        maxAge: 24 * 60 * 60 * 100
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use('/api', router);

app.use('/auth', passRouter);

async function startApp() {
    try {
        await mongoose.connect(REACT_APP_DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

        app.listen(Port, () => console.log('Server started on port ' + Port));

    } catch (e) {
        console.log(e);
    }
}

startApp();