import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

//CREATE ROOM
export const createRoom = async (req,res,next) =>{
    //We need hotel id because in hotel schema we have a rooms array where we store all 
    //the rooms id of all room present in that hotel
    //So whenever we create a new room we have to update rooms array of that hotel 
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id}})
        }
        catch(err)
        {
            next(err);
        }
        res.status(201).json(savedRoom);
    }
    catch(err)
    {
        next(err);
    }
};


//UPDATE Room
export const updateRoom = async(req,res,next) =>{
    try {
        //We write the last option new true so that the updated Room is stored in updatedRoom variable and not the result
        //of findByIdAndUpdate.
        const updatedRoom = await Room.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedRoom);
      }catch(err) {
        next(err);
      }
}


//DELETE Room
export const deleteRoom = async(req,res,next) =>{
  const hotelId = req.params.hotelid;

    try {
        await Room.findByIdAndDelete(
          req.params.id
        );
        try{
          await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id}})
        }
        catch(err)
        {
            next(err);
        }
        res.status(200).json("Room has been deleted!");
        } catch (err) {
          next(err);
        }
}
//GET HOTEL
export const getRoom = async(req,res,next) =>{
    try {
        const room = await Room.findById(
          req.params.id
        );
        res.status(200).json(room);
      } catch (err) {
        next(err);
      }
}
//GET HOTELS
export const getRooms = async(req,res,next) =>{
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
      } catch (err) {
        next(err);
      }
}