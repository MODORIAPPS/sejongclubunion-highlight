echo "Generating sitemap-common.xml..."
node -r dotenv/config ./scripts/sitemap-common.mjs 
printf "\n"

echo "Compressing generated xml files..." 
node -r dotenv/config ./scripts/compress.mjs 
printf "\n"

echo "Generating sitemap index file..." 
node -r dotenv/config ./scripts/sitemap.mjs 
printf "\n"