"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = void 0;
const SMS_1 = __importDefault(require("../models/SMS"));
const twilio_1 = __importDefault(require("twilio"));
const index_1 = require("../constants/index");
const sendSMS = async (req, res) => {
    try {
        const smsDetails = {
            otp: req.body.otp,
            firstName: req.body.firstName,
            receiverNumber: req.body.receiverNumber,
            lastName: req.body.lastName,
        };
        const resp = await (0, twilio_1.default)(index_1.sid, index_1.auth_token).messages.create({
            body: `Hi, Your OTP is: ${smsDetails.otp}`,
            to: smsDetails.receiverNumber,
            from: index_1.sender_number,
        });
        if (resp) {
            const sms = new SMS_1.default({
                firstName: smsDetails.firstName,
                lastName: smsDetails.lastName,
                time: resp.dateCreated,
                otp: smsDetails.otp,
                number: smsDetails.receiverNumber,
            });
            await sms.save();
            res.status(200).send("SMS sent successfully");
        }
    }
    catch (error) {
        console.log(error);
        res.status(401).send(error);
    }
};
exports.sendSMS = sendSMS;
