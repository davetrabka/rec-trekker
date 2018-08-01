const passport = require('passport');
const router = require('express').Router();
const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../db/models');
module.exports = router;

if (!process.env.FACEBOOK_CLIENT_ID || !process.env.FACEBOOK_CLIENT_SECRET) {
  console.log('Facebook client ID/secret not found. Skipping Facebook OAuth.');
} else {
  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
    profileFields: ['id', 'displayName', 'email'],
  };

  const strategy = new FacebookStrategy(
    facebookConfig,
    (token, refreshToken, profile, done) => {
      const facebookId = profile.id;
      const name = profile.displayName;
      const firstName = name.split(' ')[0];
      const lastName = name.split(' ')[1];
      const email = profile.emails[0].value;

      User.find({ where: { email } })
        .then(foundUser => {
          foundUser
            ? foundUser.update({ facebookId }).then(done(null, foundUser))
            : User.create({ firstName, lastName, email, facebookId }).then(
                createdUser => done(null, createdUser)
              );
        })
        .catch(done);
    }
  );

  passport.use(strategy);

  router.get(
    '/',
    passport.authenticate('facebook', { scope: 'public_profile,email' })
  );

  router.get(
    '/callback',
    passport.authenticate('facebook', {
      successRedirect: '/home',
      failureRedirect: '/login',
    })
  );
}
