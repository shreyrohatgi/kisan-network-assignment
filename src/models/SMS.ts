import Mongoose from "mongoose";
import { ISMS } from "../interface/SMS";

const SMSSchema = new Mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

export default Mongoose.model<ISMS>("SMS", SMSSchema);
