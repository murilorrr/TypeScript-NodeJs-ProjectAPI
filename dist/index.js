"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello typescript !');
const PORT = 3000;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
app.get('/api/', (req, res) => {
    res.status(200).send({ message: 'We are ONLINE!' });
});
//# sourceMappingURL=index.js.map