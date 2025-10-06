import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const src = resolve(process.cwd(), 'src/assets/images/favicon1.png');
const destDir = resolve(process.cwd(), 'public');
const dest = resolve(destDir, 'favicon.png');

if (!existsSync(src)) {
  console.error('Source favicon not found:', src);
  process.exit(1);
}

if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });

copyFileSync(src, dest);
console.log('Copied', src, 'to', dest);
