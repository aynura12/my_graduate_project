const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    adminname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;
