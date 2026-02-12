export { NotionRequestHeaders, BlockId, NotionBlock };

type BlockId = string;

interface NotionRequestHeaders {
  Authorization: string;
  "Notion-version": string;
  [key: string]: string;
}

interface NotionBlock {
  object: "block";
  id: string;
  type: string;
  has_children: boolean;
  [key: string]: unknown;
}
