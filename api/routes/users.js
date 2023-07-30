import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=> {
//     res.send("Hello, you are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
//     res.send("Hello user, you are logged in and you can delete your acc!")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
//     res.send("Hello admin, you are logged in and you can delete all acc!")
// })

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET BY ID
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin, getUsers);

export default router