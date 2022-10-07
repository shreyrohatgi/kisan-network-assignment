"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const validation = (schema) => async (req, res, next) => {
    const body = req.body;
    try {
        await schema.validate(body);
        next();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.validation = validation;
