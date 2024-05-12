import { Router } from "express";
import * as complaintController from "./controller/complaint.js";
import {authAdmin, authDoctor, authGuardian, authPatient } from "../../middleware/auth.js";

import { validation } from "../../middleware/validation.js";

import * as validators from './complaint.validation.js'

const router = Router();



router.get("/", complaintController.getComplaintModule)


router.post("/complaintPatient/:patientId",
//validation(validators.complaint),
complaintController.sendComplaintPatient)

router.post("/complaintDoctor/:doctorId", 
//validation(validators.complaint),
complaintController.sendComplaintDoctor)

router.post("/complaintGuardian/:guardianId", 
//validation(validators.complaint),
complaintController.sendComplaintGuardian)


//reply complaint doctor
router.post('/feedbackComplaint/:complaintId',authAdmin,
//validation(validators.reply),
complaintController.sendReply)



export default router;



