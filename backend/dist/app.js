"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const constants_1 = require("./constants");
const db_1 = require("./db");
const sms_1 = __importDefault(require("./routes/sms"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, db_1.connection)();
app.use(body_parser_1.default.json());
app.use("/api", sms_1.default);
app.listen(constants_1.port, () => console.log(`server is running on port: ${constants_1.port}`));
