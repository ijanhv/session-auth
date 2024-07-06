"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const index_1 = __importDefault(require("../src/routes/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const PORT = 8080;
// Express route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
(0, db_1.connectDB)();
app.listen(PORT, () => console.log("server is running on http://localhost:" + PORT));
app.use("/", (0, index_1.default)());
