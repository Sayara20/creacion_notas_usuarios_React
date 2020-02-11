const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, //quita espacios innesesarios
        unique: true
    },

}, {
    timestamps: true // coloca la fecha actual


});
module.exports = model('user', userSchema);