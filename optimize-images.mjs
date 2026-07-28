import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";
import { optimize } from "svgo";

const defaultImageDirectory = "site/public/img";
const supportedExtensions = new Set([".gif", ".jpg", ".png", ".svg"]);

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      return findImages(path);
    }
    return entry.isFile() && supportedExtensions.has(extname(entry.name).toLowerCase())
      ? [path]
      : [];
  }));
  return paths.flat().sort();
}

async function optimizeImage(path) {
  const extension = extname(path).toLowerCase();
  const input = await readFile(path);
  let output;

  switch (extension) {
    case ".gif":
      output = await sharp(input, { animated: true }).gif({ effort: 7 }).toBuffer();
      break;
    case ".jpg":
      output = await sharp(input).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      break;
    case ".png":
      output = await sharp(input).png({ compressionLevel: 9, palette: true }).toBuffer();
      break;
    case ".svg":
      output = Buffer.from(optimize(input.toString("utf8"), { path }).data);
      break;
  }

  if (output.length < input.length) {
    await writeFile(path, output);
  }
}

export async function optimizeImages(directory = defaultImageDirectory) {
  const paths = await findImages(resolve(directory));
  await Promise.all(paths.map(optimizeImage));
  return paths;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const paths = await optimizeImages(process.argv[2]);
  const label = paths.length === 1 ? "image" : "images";
  console.log(`Optimized ${paths.length} ${label}`);
}
