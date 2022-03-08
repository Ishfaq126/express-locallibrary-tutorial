const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')

const auth = async (req, res) => {
    const { username, password } = req.body;
        Admin.findOne({ username: username }, (err, user) => {
        if (user) {
                if (password === user.password) {
                    res.send({"status": true})
                }

                else
                    res.send({"status": false})
            }

        else {
            res.send({"status": false})
        }
})
}

module.exports.auth = auth;
