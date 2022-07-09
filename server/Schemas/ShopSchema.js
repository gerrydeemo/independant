var mongoose = require('mongoose')

const ShopSchema = {
    name: String,
    location: String,
    users: [
        {
            email: String
        }
    ]

}
const Shop = mongoose.model("Shop", ShopSchema, "Shops")

module.exports = Shop