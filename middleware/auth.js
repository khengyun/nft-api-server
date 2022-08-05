const jwt = require("jsonwebtoken")

const verifyToken = function (req, res, next) {
    const authHeader = req.header("Authorization")

    const token = authHeader || authHeader.split(" ")[1]
    if(!authHeader){
        return res.status(403).json({success: false , message: token})
    }

    if (!token) {
        return res.status(401).json({ success: false, message: "Access Token Not Found" })
    }

    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.body.userId = decode.userId

        next()

    } catch (error) {
        return res.status(403).json({success: false , message: "Invalid token"})
    }
}
module.exports = verifyToken