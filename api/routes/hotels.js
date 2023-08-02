import express from "express";
import Hotel from "../models/Hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin,createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);

//GET BY ID
//We are writing /find in the route beacuse in the count by city function
//we are writing countByCity in the route and it is being trated as an id by the server
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
