const express = require("express");
const router = express();
const bcrypt = require('bcrypt');
const { request } = require("http");
const https = request
const jwt = require("jsonwebtoken");
const saltRounds = process.env['saltRounds']

const Account = require("../Schema/Account")

// register request 
router.post("/register", async (req, res) => {
    const { email, username, password ,fullname,
          address,phone,avatar} = req.body

    if (!email || !username || !password) {
        return res.status(200).json({ success: false, message: "Missing email or username or password" })
    }
    try { 
      //checkuser
        const emailcheck = await Account.findOne({ email })
        if (emailcheck) {
            return res.status(200).json({ success: false, message: "email already taken" })
        }

        bcrypt.genSalt(saltRounds, async function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {

                var newUser = await new Account({ email, username, password: hash })

                await newUser.save()

                return res.status(200).json({ success: true, message: "User Created successfully", user: newUser, userId: newUser._id })
            });
        });

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
})


module.exports = router;
