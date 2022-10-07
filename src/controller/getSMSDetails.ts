import { Request, Response } from "express";
import SMS from "../models/SMS";

export const getSMSDetails = async (req: Request, res: Response) => {
  try {
    const data = await SMS.find({}).sort({ time: -1 });
    res.status(200).send(data);
  } catch (error) {
    res.status(401).send(error);
  }
};
