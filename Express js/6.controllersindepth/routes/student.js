import express from 'express'
import { allstudent,createstu,updstudent,deletestu } from '../controllers/student.js';
const router=express.Router();

router.get("/all",allstudent);
router.post("/create",createstu);
router.put("/update",updstudent);
router.delete("/delete",deletestu)

export default router;