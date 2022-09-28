import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TrainDetailsSchema = new Schema({
    
    TrainName: {
        type: String,
    },
    Day: {
        type: Number,
    },
    StartPoint: {
        type: Number,
    },
    EndPoint: {
        type: Number,
    },
    StartUpTime: {
        type: String,
    },
    TrainType: {
        type: String,
    }

});

export const TrainDetailsModel = mongoose.model('TrainDetails', TrainDetailsSchema);