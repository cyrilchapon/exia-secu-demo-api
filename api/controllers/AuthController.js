/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
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
		    token: user.createToken()
		  });
		})(req, res);
	},
	
	/**
	 * Retreives user from the request
	 * @param {Object} req Request object
	 * @param {Object} res Response object
	 */
	me: function (req, res) {
		return res.ok({
			user: req.user
		});
	}
};

