import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';

import dotenv from 'dotenv';

dotenv.config();

let {
    REACT_APP_URL,
    REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GOOGLE_CLIENT_SECRET,
    REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_CLIENT_SECRET,
    REACT_APP_FACEBOOK_APP_ID, REACT_APP_FACEBOOK_APP_SECRET,
    REACT_APP_TWITTER_CLIENT_ID, REACT_APP_TWITTER_CLIENT_SECRET,
} = process.env;

const passportSetup = () => {

    passport.use(new GoogleStrategy({
        clientID: REACT_APP_GOOGLE_CLIENT_ID,
        clientSecret: REACT_APP_GOOGLE_CLIENT_SECRET,
        callbackURL: REACT_APP_URL + "/auth/google/callback",
        passReqToCallback: true
    },
        function (request, accessToken, refreshToken, profile, done) {
            done(null, profile)
        }
    ));

    passport.use(new GithubStrategy({
        clientID: REACT_APP_GITHUB_CLIENT_ID,
        clientSecret: REACT_APP_GITHUB_CLIENT_SECRET,
        callbackURL: REACT_APP_URL + "/auth/github/callback",
        //passReqToCallback: true
    },
        function (request, accessToken, refreshToken, profile, done) {
            done(null, profile)
        }
    ));

    passport.use(new FacebookStrategy({
        clientID: REACT_APP_GITHUB_CLIENT_ID,
        clientSecret: REACT_APP_GITHUB_CLIENT_SECRET,
        callbackURL: REACT_APP_URL + "/auth/facebook/callback",
        profileFields: ['id', 'displayName'],

        passReqToCallback: true
    },
        function (accessToken, refreshToken, profile, cb) {
            cb(null, profile)
        }
    ));

    passport.use(new TwitterStrategy({
        consumerKey: REACT_APP_TWITTER_CLIENT_ID,
        consumerSecret: REACT_APP_TWITTER_CLIENT_SECRET,
        callbackURL: REACT_APP_URL + "/auth/twitter/callback",
        // passReqToCallback: true
    },
        function (token, tokenSecret, profile, done) {
            done(null, profile)
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}
export default passportSetup;