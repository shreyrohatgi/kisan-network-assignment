import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 7000;
export const db_url = process.env.DB_URL || "";
export const sid = process.env.SID || "";
export const auth_token = process.env.AUTH_TOKEN || "";
export const sender_number = process.env.SENDER_NUMBER || "";
