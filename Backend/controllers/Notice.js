
import { NoticeModel } from '../models/Notice.js';


export const addNotice = async (req, res) => {
    console.log(req.body);
    const Notice = new NoticeModel({
        Date: req.body.Date,
        Notice: req.body.Notice
    });
    const details = await Notice.save();
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

export const getAllNotice = async (req, res) => {
    const Notice = await NoticeModel.find({});
    res.send(Notice);
}

export const getAllNoticeCount = async (req, res) => {
    const Notice = await NoticeModel.find().count();
    res.send(String(Notice));
}


export const deleteNotice = async (req, res) => {
    const Notice = await NoticeModel.findOneAndDelete({ _id: req.body.id });
    res.send(Notice);
}

export const editNotice = async (req, res) => {
    try {
        console.log(req);
        const Notice = await NoticeModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                Date: req.body.Date,
                Notice: req.body.Notice
                
            },
            {
                new:true
            }
            );

        if (Notice) {
            res.send({
                status: true,
                details: Notice  
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



export const getSelectedNotice = async (req, res) => {
    const Notice = await NoticeModel.findOne({ _id: req.body.id });
    res.send(Notice);
}