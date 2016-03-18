/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcryptjs');
var bcryptHelper = require('bcrypt-helper');
var jwt = require('jsonwebtoken');

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
    createToken: function() {
      return jwt.sign({
          user: this.toJSON()
        },
        sails.config.jwtSettings.secret,
        {
          algorithm: sails.config.jwtSettings.algorithm,
          expiresInMinutes: sails.config.jwtSettings.expiresInMinutes,
          issuer: sails.config.jwtSettings.issuer,
          audience: sails.config.jwtSettings.audience
        }
      );
    }
  },
  
  beforeCreate: function(user, next) {
    bcrypt.hash(user.password, sails.config.bcrypt.depth, function(err, hash) {
      if (err) return next(err);
      
      user.password = hash;
      return next(null, user);
    });
  },
  
  beforeUpdate: function(user, next){
    if(!user.password){
      return next(null, user);
    }
    
    if(bcryptHelper.isHash(user.password)) {
      delete user.password;
      return next(null, user);
    }

    bcrypt.hash(user.password, sails.config.bcrypt.depth, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      return next(null, user);
    });
  }
};

