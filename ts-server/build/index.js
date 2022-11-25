"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = 3000;
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("BIENVENIDOS AL SERVIDOR TYPESCRIPT");
});
app.get("/suma", function (req, res) {
    var num1 = Number(req.query.num1);
    var num2 = Number(req.query.num2);
    res.json({ resultadoSuma: num1 + num2 });
});
app.listen(port);
console.log("Servidor Typescript funcionando en http://localhost:".concat(port));
