"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("./constants/index");
const connection = async () => {
    try {
        await mongoose_1.default.connect(index_1.db_url);
        console.log("Connection successfull !");
    }
    catch (error) {
        console.log(error);
    }
};
exports.connection = connection;
