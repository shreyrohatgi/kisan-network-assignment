import mongoose from "mongoose";
import { db_url } from "./constants/index";

export const connection = async () => {
  try {
    await mongoose.connect(db_url);
    console.log("Connection successfull !");
  } catch (error) {
    console.log(error);
  }
};
