import express from "express";
import { smsSchema } from "../schema/smsSchema";
import { getSMSDetails } from "../controller/getSMSDetails";
import { sendSMS } from "../controller/sendSMS";
import { validation } from "../middleware/schemaValidator";

const router = express.Router();

/**
 * API: To send sms to an user
 * METHOD: POST
 * ROUTE: PUBLIC
 * URL: /api/sms/
 */
router.post("/sms", validation(smsSchema), sendSMS);

/**
 * API: To get sms details of an user
 * METHOD: GET
 * ROUTE: PUBLIC
 * URL: /api/sms/
 */
router.get("/sms", getSMSDetails);

export default router;
