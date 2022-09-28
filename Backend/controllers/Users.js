
import { UserModel } from '../models/Users';


export const addUser = async (req, res) => {
    console.log(req.body);
    const UserDetails = new UserModel({
        Name: req.body.Name,
        ContactNumber: req.body.ContactNumber,
        Email: req.body.Email
        
        
    });
    const details = await UserDetails.save();
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

export const getAllUser = async (req, res) => {
    const UserDetails = await UserModel.find({});
    res.send(UserDetails);
}

export const getUserCount = async (req, res) => {
    const UserDetails = await UserModel.find().count();
    res.send(String(UserDetails));
}


export const deleteUserDetails = async (req, res) => {
    const UserDetails = await UserModel.findOneAndDelete({ _id: req.body.id });
    res.send(UserDetails);
}

export const editUserDetails = async (req, res) => {
    try {
        console.log(req);
        const UserDetails = await UserModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                Name: req.body.Name,
                ContactNumber: req.body.ContactNumber,
                Email: req.body.Email
                
               
            },
            {
                new:true
            }
            );

        if (UserDetails) {
            res.send({
                status: true,
                details: UserDetails  
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



export const getSelectedUser = async (req, res) => {
    const UserDetails = await UserModel.findOne({ _id: req.body.id });
    res.send(UserDetails);
}