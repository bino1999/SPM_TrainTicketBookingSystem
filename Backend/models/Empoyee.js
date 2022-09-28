import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    
    Name: {
        type: String,
    },
    Position: {
        type: Number,
    },
    DateOfBirth: {
        type: Number,
    },
    ContactNumber: {
        type: Number,
    },
    Email: {
        type: String,
    },
    Address: {
        type: String,
    }

});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema);