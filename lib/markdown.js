// lib/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMarkdownFileData(fileName) {
  const filePath = path.join(contentDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return {
    data,
    content: htmlContent,
  };
}

export function getAllMarkdownFileNames() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.md'));
}
