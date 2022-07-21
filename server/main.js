const express = require('express')
const app = express()
const port = 5000
const User = require('./Schemas/UserSchema')
const Shop = require('./Schemas/ShopSchema')

const multer = require("multer")

const fs = require("fs")
app.use(express.json())
var cors = require('cors')
app.use("/", cors(corsOptions))
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}




const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gerrydeemo:Gerald2482@cluster0.nivaskj.mongodb.net/?retryWrites=true&w=majority',() => {
    console.log("Connected to MongoDB")
})

app.post("/login", (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            res.send(err)
        } else if (user) {
            if (user.password === req.body.password) {
                res.send(user)
            } else {
                res.send("Password is incorrect")
            }
        } else {
            res.send("User does not exist")
        }
    })
}
)

app.post("/request", (req, res ) => {
  var id = req.body.id
  Shop.find({_id: id}, (err, shop) => {
    shop[0].users.push({email: req.body.email})
    shop[0].save()
  })
})




app.get("/shops", (req, res) => {
    Shop.find({}, (err, shops) => {
        if (err) {
          console.log(err)
            res.send(err)
        } else {
          console.log(shops)
            res.send(shops)
        }
    })
})

app.post("/updateName", (req, res) => {
  var realname = req.body.realname
  var name = req.body.name
  User.findOneAndUpdate({name: realname}, {name: name}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      console.log(user)
    }
  })
})


app.post("/updateEmail", (req, res) => {
  var realemail = req.body.realemail
  var email = req.body.email
  User.findOneAndUpdate({email: realemail}, {email: email}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      console.log(user)
    }
  })
})



app.post("/getRequests", (req, res) => {
  var email = req.body.email
  Shop.find({users: {$elemMatch: {email: email}}}, (err, shops) => {
    console.log("here")
    if (err) {
      console.log(err)
    } else {
      console.log(shops)
      res.send(shops)
    }
  })
})



app.use(express.urlencoded({ extended: true }));
const upload = multer({ dest: "../client/public/uploads/" });

app.post("/upload", upload.single("image"), (req, res) => {
  var email = req.headers.email
  var fileName = req.file.filename
  var newFileName = fileName + ".png"
  fs.rename(`../client/public/uploads/`+fileName, `../client/public/uploads/`+newFileName, function (err) {
    if (err) throw err;
    console.log('File Renamed.');
    try{
    User.findOneAndUpdate({email:email}, {image: newFileName}, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        console.log(user)
      }
    })
  } catch (error) {
    console.log(error)
  }
  });

})




app.post("/getImage", (req, res) => {
  var email = req.body.email
  User.findOne({email: email}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      console.log(user)
      console.log("getImage")
      res.json(user)
    }
  })
})

app.post("/updatePassword", (req, res) => {
  var realpass = req.body.realpass
  var password = req.body.password
  User.findOneAndUpdate({password: realpass}, {password: password}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      console.log(user)
    }
  })
})




app.post("/register", async (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(user) {
      res.send("User already exists")
      console.log("User already exists")
    } else {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
        User.create(newUser)
        .then((user) => {
          res.send(user)
          console.log("new person")
        }).catch ((err) => { 
          console.log(err)
        })
    }
  })

  

})



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})