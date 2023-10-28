import express from "express";

import { add, get, del, update } from "../controller/book.js";

const routes = express.Router();

routes.post("/add", add);
routes.get("/get", get);
routes.delete("/del/:id", del);
routes.put("/update/:id", update);

export default routes;
