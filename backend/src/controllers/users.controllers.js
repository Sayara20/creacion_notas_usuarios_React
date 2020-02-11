const userCtrl = {};

const User = require('../models/users');

userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users)
}



userCtrl.createUser = async(req, res) => {
    try {
        const { username } = req.body;
        const newUser = new User({ username });
        await newUser.save();
        res.json('users creado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
}

userCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('nota emliminada')
}

module.exports = userCtrl;