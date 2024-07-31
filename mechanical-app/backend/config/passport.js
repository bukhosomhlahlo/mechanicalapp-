const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/api/users/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(user => {
          if (user) {
            done(null, user);
          } else {
            new User({ googleId: profile.id, name: profile.displayName })
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: '/api/users/facebook/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ facebookId: profile.id }).then(user => {
          if (user) {
            done(null, user);
          } else {
            new User({ facebookId: profile.id, name: profile.displayName })
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
  );
};
