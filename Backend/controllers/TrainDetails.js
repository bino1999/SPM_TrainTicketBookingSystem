
import { TrainDetailsModel} from '../models/TrainDetails';


export const addTrain = async (req, res) => {
    console.log(req.body);
    const TrainDetails = new TrainDetailsModel({
        TrainName: req.body.TrainName,
        Day: req.body.Day,
        StartPoint: req.body.StartPoint,
        EndPoint: req.body.EndPoint,
        StartUpTime: req.body.StartUpTime,
        TrainType: req.body.TrainType
        
    });
    const details = await TrainDetails.save();
    if (details) {
        res.send({
            status: true,
            details: details
        });
    } else {
        res.send({
            status: false,
        });
    }
}

export const getAllEmployees = async (req, res) => {
    const TrainDetails = await TrainDetailsModel.find({});
    res.send(TrainDetails);
}

export const getTrainDetailsCount = async (req, res) => {
    const TrainDetails = await TrainDetailsModel.find().count();
    res.send(String(TrainDetails));
}


export const deleteTrainDetails = async (req, res) => {
    const TrainDetails = await TrainDetailsModel.findOneAndDelete({ _id: req.body.id });
    res.send(TrainDetails);
}

export const editTrainDetails = async (req, res) => {
    try {
        console.log(req);
        const TrainDetails = await TrainDetailsModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                TrainName: req.body.naTrainNameme,
                Day: req.body.Day,
                StartPoint: req.body.StartPoint,
                EndPoint: req.body.EndPoint,
                StartUpTime: req.body.StartUpTime,
                TrainType: req.body.TrainType
               
            },
            {
                new:true
            }
            );

        if (TrainDetails) {
            res.send({
                status: true,
                details: TrainDetailsa  
            });
        } else {
            res.send({
                status: false,
            });
        }

    } catch (error) {
        console.log(error.messaga)
    }
}



export const getSelectedEmployee = async (req, res) => {
    const TrainDetails = await TrainDetailsModel.findOne({ _id: req.body.id });
    res.send(TrainDetails);
}