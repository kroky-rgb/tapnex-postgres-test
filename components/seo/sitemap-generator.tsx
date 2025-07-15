export function generateSitemap() {
  const baseUrl = "https://tapnex.tech"
  const currentDate = new Date().toISOString()

  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/features", priority: "0.9", changefreq: "monthly" },
    { url: "/solutions", priority: "0.9", changefreq: "monthly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/contact", priority: "0.7", changefreq: "monthly" },
    { url: "/careers", priority: "0.6", changefreq: "monthly" },
    { url: "/privacy", priority: "0.3", changefreq: "yearly" },
    { url: "/terms", priority: "0.3", changefreq: "yearly" },
    { url: "/cookies", priority: "0.3", changefreq: "yearly" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.url === "/"
        ? `<image:image>
      <image:loc>${baseUrl}/tapnex-logo.png</image:loc>
      <image:title>TapNex Logo</image:title>
      <image:caption>TapNex - Smart Event Technology Logo</image:caption>
    </image:image>`
        : ""
    }
  </url>`,
  )
  .join("\n")}
</urlset>`

  return sitemap
}
