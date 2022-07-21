var mongoose = require('mongoose')

const UserSchema = {
    name: String,
    email: String,
    password: String,
    image: String

}
const User = mongoose.model("User", UserSchema, "Users")

module.exports = User