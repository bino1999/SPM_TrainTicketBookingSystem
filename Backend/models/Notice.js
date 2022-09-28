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

export const NoticeModel = mongoose.model('Notice', NoticeSchema);