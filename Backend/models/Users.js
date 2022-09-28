import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    Name: {
        type: String,
    },
    ContactNumber: {
        type: Number,
    },
    Email: {
        type: Number,
    }

});

export const UserModel = mongoose.model('User', UserSchema);