import fs from "fs";
import { globby } from "globby";
import prettier from "prettier";
import path from "path";

const getDate = new Date().toISOString();

const webrootDomain = process.env.HOST_DOMAIN;

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby(["./public/sitemap/*.gz"]);

  const sitemapIndex = `
    ${pages
      .map(page => {
        const path = page.replace("./public/", "");

        return `
          <sitemap>
            <loc>${`${webrootDomain}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join("")}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = await formatted(sitemap);

  fs.writeFileSync(path.join(path.resolve(), '/public/sitemap.xml'), formattedSitemap, "utf8");
  console.log("✅ sitemap.xml generated!");
})();