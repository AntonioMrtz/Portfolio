import { Hono } from "hono";
import notionController from "./controllers/notion.controller";

const app = new Hono();

app.route("/notion", notionController);

export default app;
