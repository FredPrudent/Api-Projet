const mongoose = require('mongoose');

const Professional_data = mongoose.model('Professional_data', new mongoose.Schema({
    professional_name: String, 
    professional_mail: String, 
    professional_phone: Number,
    professional_adress: String, 
    professional_logo: String
}));


exports.Professional_data = Professional_data; 
;