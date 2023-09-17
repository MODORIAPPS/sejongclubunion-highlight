// @ts-check
import fs from "fs";
import path from "path";
import zlib from "zlib";

const dirs = [path.join(path.resolve(), '/public/sitemap')];
// const dirs = ["./public/sitemap"];

dirs.forEach((dir) => {
    fs.readdirSync(dir).forEach((file) => {
        if (file.endsWith(".xml")) {
            // gzip
            const fileContents = fs.createReadStream(dir + "/" + file);
            const writeStream = fs.createWriteStream(dir + "/" + file + ".gz");
            const zip = zlib.createGzip();

            fileContents
                .pipe(zip)
                .on("error", (err) => console.error(err))
                .pipe(writeStream)
                .on("error", (err) => console.error(err))
                .on("finish", () => console.log(`📦 ${file}.gz generated!`));
        }
    });
});