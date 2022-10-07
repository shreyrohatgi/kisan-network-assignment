import express from "express";
import bodyParser from "body-parser";
import { port } from "./constants";
import { connection } from "./db";
import sms from "./routes/sms";
import cors from "cors";

const app = express();
app.use(cors());

connection();

app.use(bodyParser.json());
app.use("/api", sms);

app.listen(port, () => console.log(`server is running on port: ${port}`));
