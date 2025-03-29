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