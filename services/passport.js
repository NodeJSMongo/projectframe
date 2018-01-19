//require passport and strategy
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//require google keys to use those there
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
//cookei and session setup
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
//use of middleware
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      //check for an existing same user
      if (existingUser) {
        return done(null, existingUser);
      }
      //create a new user
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);

    }
  )
);
