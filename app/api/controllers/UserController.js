/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    userinfo : function(req,res){
        User.findOne({uid: req.session.passport.user}, function(err, user) {
                res.json(user);
        });
    } 
};

