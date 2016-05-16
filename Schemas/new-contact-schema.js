var mongoose   = require('mongoose'),

    // Mongoose Schema definition
    Schema     = mongoose.Schema,
    ContactSchema;

ContactSchema = new Schema({
    "firstName"   : String,
    "lastName"    : String,
    "phoneNumber" : Number,
    "email"       : String,
    "created_at"  : {type: Date, default: Date.now}
});

// Mongoose Model definition
module.exports = mongoose.model('contacts', ContactSchema);
