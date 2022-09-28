
import { EmployeeModel } from '../models/Employee.js';


export const addEmployee = async (req, res) => {
    console.log(req.body);
    const employee = new EmployeeModel({
        Name: req.body.Name,
        Position: req.body.Position,
        DateOfBirth: req.body.DateOfBirth,
        ContactNumber: req.body.ContactNumber,
        Email: req.body.Email,
        Address: req.body.Address
     
    });
    const details = await employee.save();
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
    const employees = await EmployeeModel.find({});
    res.send(employees);
}

export const getAllEmployeesCount = async (req, res) => {
    const employees = await EmployeeModel.find().count();
    res.send(String(employees));
}


export const deleteEmployee = async (req, res) => {
    const employee = await EmployeeModel.findOneAndDelete({ _id: req.body.id });
    res.send(employee);
}

export const editEmployee = async (req, res) => {
    try {
        console.log(req);
        const employee = await EmployeeModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                Name: req.body.Name,
                Position: req.body.Position,
                DateOfBirth: req.body.DateOfBirth,
                ContactNumber: req.body.ContactNumber,
                Email: req.body.Email,
                Address: req.body.Address
              
            },
            {
                new:true
            }
            );

        if (employee) {
            res.send({
                status: true,
                details: vehicle  
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
    const employee = await EmployeeModel.findOne({ _id: req.body.id });
    res.send(employee);
}