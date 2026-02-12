import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlockId } from "../schemas/notion.schema";
import { env } from "cloudflare:workers";

export { getMarkdownFromBlock };

const getMarkdownFromBlock = async (blockId: BlockId): Promise<string> => {
  const n2m = _getNotionClient();
  const mdBlocks = await n2m.pageToMarkdown(blockId);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString.parent;
};

const _getNotionClient = () => {
  const notionClient = new Client({
    auth: env.NOTION_API_KEY,
    fetch: fetch.bind(globalThis),
  });

  const n2m = new NotionToMarkdown({ notionClient });
  return n2m;
};
