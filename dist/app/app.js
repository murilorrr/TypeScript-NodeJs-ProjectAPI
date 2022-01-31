"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
server_1.default.get('/ping/', (req, res) => {
    res.status(200).send({ message: 'pong' });
});
//# sourceMappingURL=app.js.map