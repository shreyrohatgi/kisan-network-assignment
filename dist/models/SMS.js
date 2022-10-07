"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SMSSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("SMS", SMSSchema);
