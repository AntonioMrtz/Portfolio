import { Hono } from "hono";
import { getMarkdownFromPage } from "../services/notion.service";

const notionController = new Hono();

notionController.get("/:id", async (c) => {
  const { id } = c.req.param();

  const mdString = await getMarkdownFromPage(id);
  return c.text(mdString);
});

export default notionController;
