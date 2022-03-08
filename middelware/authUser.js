const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')

const auth = async (req, res,next) => {
    const { username, password } = req.body;
    console.log()
        Admin.findOne({ username: username }, (err, user) => {
        if (user) {
                if (password === user.password) {
                    console.log("Next")
                    return next();
                }
                else {
                    console.log("Redirect")
                    res.redirect('http://localhost:3001/#/login')
                }
            }

        else {
            console.log("Redirect")
            res.redirect('http://localhost:3001/#/login')
        }
})
}

module.exports.auth = auth;