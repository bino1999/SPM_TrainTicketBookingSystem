import express, { Router } from 'express';

// Controllers
import { addEmployee,getAllEmployees, getAllEmployeesCount,deleteEmployee,editEmployee,getSelectedEmployee} from '../controllers/appointment.js';

const router = express.Router();

router.post('/add', addAppointment);
router.get('/getAllAppointments', getAllAppointments);
router.post('/delete', deleteAppointment);
router.post('/edit',editAppointment);
router.post('/updateAppointmentState',updateAppointmentState);
router.post('/getSelectedAppointment',getSelectedAppointment);
router.get('/getAllAppointmentsCount', getAllAppointmentsCount);
router.get('/getAllPending',getAllPending);
router.get('/getAllPendingCount',getAllPendingCount);
router.get('/getAllActive',getAllActive);
router.get('/getAllActiveCount',getAllActiveCount);
router.get('/getAllDone',getAllDone);
router.get('/getAllDoneCount',getAllDoneCount);
router.get('/getAllCancel',getAllCancel);
router.get('/getAllCancelCount',getAllCancelCount);


export default router;