"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSMSDetails = void 0;
const SMS_1 = __importDefault(require("../models/SMS"));
const getSMSDetails = async (req, res) => {
    try {
        const data = await SMS_1.default.find({}).sort({ time: -1 });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(401).send(error);
    }
};
exports.getSMSDetails = getSMSDetails;
