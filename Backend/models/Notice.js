import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
    
    Date: {
        type: String,
    },
    Notice: {
        type: Number,
    }

});

export const Model = mongoose.model('Notice', NoticeSchema);