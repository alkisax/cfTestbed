const User = require('../models/user.model')

exports.findAll = async (req, res) => {
  console.log("Find all users from collection Users");
  try {
    const result = await User.find()
    res.json({
      status: true,
      data: result
    })
  } catch (err) {
    res.json({
      status: false,
      data: err
    })
    console.log("problem in reading users", err);
  }
}

exports.findOne = async (req, res) => {
  console.log("find user with specific username")
  let username = req.params.username
  try {
    const result = await User.findOne({ username: username})
    res.json({
      status: true,
      data: result
    })
  } catch (err) {
    console.log("problem in finding user", err)    
    res.json({
      status: false,
      data: err
    })
  }
}

exports.create = async (req,res) => {
  console.log("Create user");
  let data = req.body
  const newUser = new User ({
    username: data.username,
    password: data.password,
    name: data.name,
    surname: data.surname,
    email: data.email,
    address: {
      area: data.address.area,
      road: data.address.road
    }
  })
  try {
    const result = await newUser.save()
    res.json({
      status: true,
      data: result
    })
  } catch (err) {
    console.log("problem in creating user", err)    
    res.json({
      status: false,
      data: err
    })
  }
}