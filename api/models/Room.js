import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    //it is an array because many rooms might have same details and the only difference is room no
    roomNumbers: [{
        number: Number,
        unavailableDates: {type: [Date]}
    }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
