import { generateSitemap } from "@/components/seo/sitemap-generator"

export async function GET() {
  const sitemap = generateSitemap()

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
