import { BlockId } from "../schemas/notion.schema";
import { getMarkdownFromBlock } from "../api/notion.api";

export { getMarkdownFromPage };

async function getMarkdownFromPage(blockId: BlockId): Promise<string> {
  const mdString = await getMarkdownFromBlock(blockId);

  return mdString;
}
