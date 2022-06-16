import { Router } from "express";
import cors from "cors";
import passport from "passport";

const passRouter = new Router();

import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_URL } = process.env;

const CLIENT_URL = REACT_APP_URL + '/words';

const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, DELETE')
    next()
}

passRouter.use(corsMiddleware)

passRouter.get('/login/success', (req, res) => {

    res.status(200).json({
        message: 'successfull',
        user: req.user,
    })
});

passRouter.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure',
    })
});

passRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL)
});

passRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }));

passRouter.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: CLIENT_URL,
        failureRedirect: '/login/failed'
    }));

passRouter.get('/github', passport.authenticate('github', { scope: ['profile'] }));

passRouter.get(
    '/github/callback',
    passport.authenticate('github', {

        successRedirect: CLIENT_URL,
        failureRedirect: '/login/failed'
    }));

passRouter.get('/facebook', passport.authenticate('facebook', { scope: ['profile'] }));

passRouter.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: CLIENT_URL,
        failureRedirect: '/login/failed'
    }));

passRouter.get('/twitter', passport.authenticate('twitter', { scope: ['profile'] }));

passRouter.get(
    '/twitter/callback',
    passport.authenticate('twitter', {

        successRedirect: CLIENT_URL,
        failureRedirect: '/login/failed'
    }));

export default passRouter;