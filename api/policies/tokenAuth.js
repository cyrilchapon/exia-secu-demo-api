/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Policy to allow any jwt-authenticated user
 *
 */

var passport = require('passport');

module.exports = function(req, res, next) {
  passport.authenticate('jwt', function (error, user) {
    if (error) return res.serverError(error);
    if (!user) return res.forbidden();

    req.user = user;
    return next();
  })(req, res);
};
