import User from "../models/User.js";
//We do not create user because we have register function for that

//UPDATE User
export const updateUser = async(req,res,next) =>{
    try {
        //We write the last option new true so that the updated User is stored in updatedUser variable and not the result
        //of findByIdAndUpdate.
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      }catch(err) {
        next(err);
      }
}


//DELETE User
export const deleteUser = async(req,res,next) =>{
    try {
        await User.findByIdAndDelete(
          req.params.id
        );
        res.status(200).json("User has been deleted!");
      } catch (err) {
        next(err);
      }
}
//GET User
export const getUser = async(req,res,next) =>{
    try {
        const user = await User.findById(
          req.params.id
        );
        res.status(200).json(user);
      } catch (err) {
        next(err);
      }
}
//GET UserS
export const getUsers = async(req,res,next) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        next(err);
      }
}