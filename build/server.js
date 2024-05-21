"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const PostRoutes_1 = __importDefault(require("./routes/PostRoutes"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(UserRoutes_1.default);
app.use(PostRoutes_1.default);
app.listen(port, function () {
    console.log("Servidor rodando na porta " + port);
});
