const db = require('../models/index'),
  bcrypt = require('bcrypt'),
  jwt = require("jsonwebtoken"),
  signinApi= (req, res)=> {
    db.Users.findOne({ email: req.body.email })
        .then(function (user) {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    res.json({
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        _id: user._id,
                        token: jwt.sign({
                            name: user.name,
                            email: user.email,
                            isAdmin: user.isAdmin,
                            _id: user._id
                        }, process.env.JWT_SECRET)
                    })
                } else {
                    res.status(404).json({
                        errMsg: `Invalid email or password   `
                    });
                }
            } else {
                res.status(404).json({
                    errMsg: `Invalid email or password   `
                });
            }
        })
};

module.exports=signinApi;