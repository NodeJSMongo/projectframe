const passport = require('passport');
//create a route handlers using http get method using the express app
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    }),
    //res.redirect('/api/current_user');
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
