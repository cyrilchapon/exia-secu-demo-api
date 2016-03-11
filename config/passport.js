/**
 * Passport configuration file where you should configure strategies
 */
var passport = require('passport');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var EXPIRES_IN_SECONDS = 60 * 60 * 24;
var SECRET = process.env.tokenSecret || "84fsdfaz984f2d1fsd64fdsv21v6s4sd8v4sdv2sd84fzefsdfsdf5sd48zeffsdfs";
var ALGORITHM = "HS256";
var ISSUER = "exia.cesi.secu.demo";
var AUDIENCE = "exia.cesi.secu.demo";

/**
 * Triggers when user authenticates via local strategy
 */
function _onLocalStrategyAuth(email, password, next) {
  User.findOne({email: email}).exec(function (error, user) {
    if (error) return next(error, false);

    if (!user) return next(null, false);

    bcrypt.compare(password, user.password, function(error, res) {
      if (error) return next(error, false);

      if (!res)
        return next(null, false);

      return next(null, user);
    });
  });
}

/**
 * Triggers when user authenticates via JWT strategy
 */
function _onJwtStrategyAuth(payload, next) {
  var user = payload.user;
  
  if (!user) return next(null, false);
  
  User.findOne({email: user.email}).exec(function (error, user) {
    if (error) return next(error, false);

    if (!user) return next(null, false);
    
    return next(null, user);
  });
}

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
}, _onLocalStrategyAuth));

passport.use(new JwtStrategy({
  secretOrKey: SECRET,
  issuer : ISSUER,
  audience: AUDIENCE,
  passReqToCallback: false,
  jwtFromRequest: ExtractJwt.fromHeader('token')
}, _onJwtStrategyAuth));

module.exports.jwtSettings = {
  expiresIn: EXPIRES_IN_SECONDS,
  secret: SECRET,
  algorithm : ALGORITHM,
  issuer : ISSUER,
  audience : AUDIENCE
};