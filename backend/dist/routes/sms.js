"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const smsSchema_1 = require("../schema/smsSchema");
const getSMSDetails_1 = require("../controller/getSMSDetails");
const sendSMS_1 = require("../controller/sendSMS");
const schemaValidator_1 = require("../middleware/schemaValidator");
const router = express_1.default.Router();
/**
 * API: To send sms to an user
 * METHOD: POST
 * ROUTE: PUBLIC
 * URL: /api/sms/
 */
router.post("/sms", (0, schemaValidator_1.validation)(smsSchema_1.smsSchema), sendSMS_1.sendSMS);
/**
 * API: To get sms details of an user
 * METHOD: GET
 * ROUTE: PUBLIC
 * URL: /api/sms/
 */
router.get("/sms", getSMSDetails_1.getSMSDetails);
exports.default = router;
