"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
exports.default = (router) => {
    router.post('/auth/register', auth_controller_1.register);
};
