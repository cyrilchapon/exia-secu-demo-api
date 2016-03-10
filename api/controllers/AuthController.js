/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	/**
 * Sign up in system
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
	signup: function (req, res) {
		User
			.create(_.omit(req.allParams(), 'id'))
			.then(function (user) {
				return {
					token: JwtService.createToken(user),
					user: user
				};
			})
			.then(res.created)
			.catch(res.serverError);
	},

	/**
	 * Sign in by local strategy in passport
	 * @param {Object} req Request object
	 * @param {Object} res Response object
	 */
	signin: function (req, res) {
		passport.authenticate('local', function _onPassportAuth(error, user) {
		  if (error) return res.serverError(error);
		  if (!user) return res.forbidden(null);

		  return res.ok({
		    token: user.createToken(),
		    user: user
		  });
		})(req, res);
	}
};

