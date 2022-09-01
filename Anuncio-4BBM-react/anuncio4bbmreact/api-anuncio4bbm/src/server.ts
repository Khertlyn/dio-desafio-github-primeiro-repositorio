import "reflect-metadata";
import express from "express";
import cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Server on port: http://localhost:${port}`);
})
