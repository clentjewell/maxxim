import type { APIRoute } from "astro";
import { SITE } from "@lib/site";

export const GET: APIRoute = () => {
  const body = `# ${SITE.brandName}
User-agent: *
Allow: /

# Machine-readable summary for AI agents:
# ${SITE.url}/llms.txt

Sitemap: ${SITE.url}/sitemap-index.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
