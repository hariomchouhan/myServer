import { processFactorial, processSum } from "../Controllers/NumberController.js";
import express from "express";

const numberRouter = express.Router();

numberRouter.get("/factorial/:n", processFactorial);
numberRouter.post("/sum", processSum);

export default numberRouter;