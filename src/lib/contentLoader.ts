import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export function getSettings() {
  const filePath = path.join(contentDir, 'settings.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getTours() {
  const filePath = path.join(contentDir, 'tours.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
