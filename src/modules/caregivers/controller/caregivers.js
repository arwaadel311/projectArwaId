



import { asyncHandler } from "../../../utils/errorHandling.js";
import doctorModel from '../../../../DB/model/doctor.model.js'
import patientModel from '../../../../DB/model/patient.model.js'
import guardianModel from "../../../../DB/model/guardian.model.js";

//addPatient 
//doctor scan qrCode patient
export const addPatientDoctor = asyncHandler(async (req, res, next) => {
    const {doctorId}=req.params
    const { patientId } = req.params;
    const patient = await patientModel.findById(patientId)
    if (!patient) {
        return next(new Error("Not llregister account", { cause: 404 }))
    }
    if (!patient.isLogin) {
        return next(new Error("No login", { cause: 404 }))
    }
    
    const doctor = await doctorModel.findById(doctorId)
    patient.doctorId = doctorId
    await patient.save()
    
   // patient.guardianIds.push([req.guardian._id])
    doctor.patientId.push([patientId])
    await doctor.save()
   
    return res.status(201).json({ message: 'Done', patient })
})


//addPatient

//guardian scan qrCode patient
export const addPatientGuardian = asyncHandler(async (req, res, next) => {
    const {guardianId}=req.params
    const { patientId } = req.params;
    const patient = await patientModel.findById(patientId)
    if (!patient) {
     return next(new Error("Not jjj register account", { cause: 404 }))
    }
    if (!patient.isLogin) {
        return next(new Error("No login", { cause: 404 }))
    
    }
    const guardian = await guardianModel.findById(guardianId)
   
    patient.guardianIds.push([guardianId])
     await patient.save()
     guardian.patientId=patientId
     await guardian.save()
    return res.status(201).json({ message: 'Done', patient })
})



// export const addPatientDoctor = asyncHandler(async (req, res, next) => {
//     const { patientId } = req.params;
//     const patient = await patientModel.findById(patientId)
//     if (!patient) {
//         return next(new Error("Not register account", { cause: 404 }))
//     }
//     if (!patient.isLogin) {
//         return next(new Error("No login", { cause: 404 }))
    
//     }
//     const doctor = await doctorModel.findById(req.doctor._id)
//     //doctor.patientId = patientId
//     doctor.patientId.push([patientId])
//     await doctor.save()
//     return res.status(201).json({ message: 'Done', doctor })
// })


// //addPatient

// export const addPatientGuardian = asyncHandler(async (req, res, next) => {
//     const { patientId } = req.params;
//     const patient = await patientModel.findById(patientId)
//     if (!patient) {
//         return next(new Error("Not register account", { cause: 404 }))
//     }
//     if (!patient.isLogin) {
//         return next(new Error("No login", { cause: 404 }))
    
//     }
//     const guardian = await guardianModel.findById(req.guardian._id)
//     //doctor.patientId = patientId
//     guardian.patientId.push([patientId])
//     await guardian.save()
//     return res.status(201).json({ message: 'Done', guardian })
// })
