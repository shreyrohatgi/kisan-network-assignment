import { Request, Response } from "express";
import SMS from "../models/SMS";
import twilio from "twilio";
import { auth_token, sid, sender_number } from "../constants/index";

export const sendSMS = async (req: Request, res: Response) => {
  try {
    const smsDetails = {
      otp: req.body.otp,
      firstName: req.body.firstName,
      receiverNumber: req.body.receiverNumber,
      lastName: req.body.lastName,
    };
    const resp = await twilio(sid, auth_token).messages.create({
      body: `Hi, Your OTP is: ${smsDetails.otp}`,
      to: smsDetails.receiverNumber,
      from: sender_number,
    });
    if (resp) {
      const sms = new SMS({
        firstName: smsDetails.firstName,
        lastName: smsDetails.lastName,
        time: resp.dateCreated,
        otp: smsDetails.otp,
        number: smsDetails.receiverNumber,
      });

      await sms.save();
      res.status(200).send("SMS sent successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
};
