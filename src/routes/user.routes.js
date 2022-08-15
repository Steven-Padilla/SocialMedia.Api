import { Router } from "express";
import { createUser, deleteUser, getSingleUSer, getUsers, updateUser } from "../controllers/user.controller.js";
const router = Router();

router.get('/user', getUsers)
router.post('/user', createUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
router.get('/user/:id',getSingleUSer)


export default router;
