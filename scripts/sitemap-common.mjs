// @ts-check
/**
 * Below code is based on
 * https://gist.githubusercontent.com/spemer/7f07e9adc25888f4af858d10c5818499/raw/6cfc9e47d4c1e963b546dd2d5f14890a11c26a0e/sitemap-common.js
 */
import fs from "fs";
import { globby } from "globby";
import prettier from "prettier";
import { Client } from '@notionhq/client';
import path from "path";

const SCU_DOMAIN = process.env.HOST_DOMAIN;
const formatted = sitemap => prettier.format(sitemap, { parser: "html" });
const departmentList = ["show", "culture", "volunteer", "religion", "physical", "academic"];

(async () => {
  const getDate = new Date().toISOString();
  const pages = await globby([
    // include
    "./src/pages/**/*.tsx",
    "./src/pages/*.tsx",
    // exclude
    "!./src/pages/_*.tsx",
    "!./src/pages/form/components/**/*.tsx",
    "!./src/pages/form/data/**/*.tsx",
    "!./src/pages/form/fragments/**/*.tsx",
  ]);

  const faqSitemap = `
    ${departmentList
      .map(dept => {
        const path = `${SCU_DOMAIN}/content/${dept}`;
        return `
          <url>
            <loc>${path}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  const pagesSitemap = `
    ${pages
      .map(page => {
        const path = page
          .replace("./src/pages/", "")
          .replace(".tsx", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;

        if (path.includes("clubs/[subject]") || path.includes("component")) return;
        return `
          <url>
            <loc>${SCU_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
      ${faqSitemap}
    </urlset>
  `;

  const formattedSitemap = await formatted(generatedSitemap);

  fs.mkdirSync(path.join(path.resolve(), '/public/sitemap'), { recursive: true });
  fs.writeFileSync(path.join(path.resolve(), '/public/sitemap/sitemap-common.xml'), formattedSitemap, "utf8");
  console.log("📝 sitemap-common.xml generated!");
})();