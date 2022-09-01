import express from "express";
import { router } from "./routes";


const app = express();

app.use(router)
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server on port: http://localhost:${port}/tipoAnuncio`);
})

