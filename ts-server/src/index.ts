import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const port: string = process.env.port || "3000";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("BIENVENIDOS AL SERVIDOR TYPESCRIPT");
});

app.get("/suma", (req: Request, res: Response) => {
  const num1: number = Number(req.query.num1);
  const num2: number = Number(req.query.num2);

  res.json({ resultadoSuma: num1 + num2 });
});

app.listen(port);

console.log(`Servidor Typescript funcionando en http://localhost:${port}`);
