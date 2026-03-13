
import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import { join, extname } from 'path';

const IMAGE_DIR = '/Users/vutrongnhannghia/Downloads/ky-thuat-smarthome/site/src/assets/images';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function walk(dir) {
    const files = await readdir(dir);
    for (const file of files) {
        const path = join(dir, file);
        const s = await stat(path);
        if (s.isDirectory()) {
            await walk(path);
        } else {
            const ext = extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                await compress(path);
            }
        }
    }
}

async function compress(filePath) {
    try {
        const stats = await stat(filePath);
        const originalSize = stats.size;

        const image = sharp(filePath);
        const metadata = await image.metadata();

        console.log(`Processing: ${filePath} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

        let pipeline = sharp(filePath);

        // Resize if too large
        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize(MAX_WIDTH);
        }

        const ext = extname(filePath).toLowerCase();
        let buffer;
        if (ext === '.jpg' || ext === '.jpeg') {
            buffer = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
        } else if (ext === '.png') {
            buffer = await pipeline.png({ quality: QUALITY, palette: true }).toBuffer();
        }

        if (buffer && buffer.length < originalSize) {
            await writeFile(filePath, buffer);
            console.log(`  ✓ Compressed: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
        } else {
            console.log(`  - Skipped (No improvement: ${originalSize} -> ${buffer?.length})`);
        }
    } catch (err) {
        console.error(`  × Error processing ${filePath}:`, err.message);
    }
}

console.log('Starting image compression...');
walk(IMAGE_DIR).then(() => console.log('Done!'));
