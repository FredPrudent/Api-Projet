const mongoose = require('mongoose');

const Professional_info = mongoose.model('Professional_info', new mongoose.Schema({
    professional_name: String, 
    professional_mail: String, 
    professional_phone: Number,
    professional_adress: String, 
    professional_logo: String
}));


exports.Professional_info = Professional_info; 
;