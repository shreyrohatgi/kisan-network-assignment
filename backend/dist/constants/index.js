"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sender_number = exports.auth_token = exports.sid = exports.db_url = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.port = process.env.PORT || 7000;
exports.db_url = process.env.DB_URL || "";
exports.sid = process.env.SID || "";
exports.auth_token = process.env.AUTH_TOKEN || "";
exports.sender_number = process.env.SENDER_NUMBER || "";
