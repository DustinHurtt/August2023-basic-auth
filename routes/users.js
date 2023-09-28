var express = require('express');
var router = express.Router();

const { isLoggedIn } = require('../middleware/route-guard')

/* GET users listing. */
router.get('/userProfile', isLoggedIn, (req, res) => {

  res.render('users/user-profile.hbs', { user: req.session.user })

});



module.exports = router;
