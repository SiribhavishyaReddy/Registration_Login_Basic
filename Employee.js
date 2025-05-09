const mongoose = require('mongoose');

// Define the schema
const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, // Ensure email is unique
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Basic email validation regex
    },
    password: { type: String, required: true },
    gender: { 
        type: String, 
        required: true, 
        enum: ['male', 'female', 'other'] // Restrict to specific values
    },
    age: { 
        type: Number, // Change to Number
        required: true,
        min: 0 // Optional: Ensure age is a positive number
    },
});

// Register the model
const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

module.exports = EmployeeModel;
