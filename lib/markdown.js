// lib/markdown.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parse } from 'marked';

// Répertoire des fichiers Markdown
const contentDirectory = path.join(process.cwd(), 'content');

// Fonction pour lire les fichiers Markdown dans un répertoire (y compris les sous-répertoires)
function getMarkdownFilePathsFromDirectory(directoryPath) {
  let filePaths = [];
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    const fullPath = path.join(directoryPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      filePaths = filePaths.concat(getMarkdownFilePathsFromDirectory(fullPath));
    } else if (file.endsWith('.md')) {
      filePaths.push(fullPath);
    }
  });

  return filePaths;
}

// Fonction pour obtenir les chemins des fichiers Markdown
export function getAllMarkdownFilePaths() {
  const allMarkdownFilePaths = getMarkdownFilePathsFromDirectory(contentDirectory);
  return allMarkdownFilePaths.map(filePath => ({
    params: {
      slug: path.relative(contentDirectory, filePath)
        .replace(/\\/g, '/') // Convertit les backslashes en slashes pour Windows
        .replace(/\.md$/, '') // Supprime l'extension .md
        .toLowerCase(), // Convertit en minuscules pour cohérence
    },
  }));
}

// Fonction pour obtenir les données d'un fichier Markdown
export function getMarkdownFileData(filePath) {
  const fullPath = path.join(contentDirectory, filePath + '.md'); // Ajoute l'extension .md

  console.log('Full path to the Markdown file:', fullPath); // Vérifie le chemin complet du fichier

  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    throw new Error(`File not found: ${fullPath}`);
  }

  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);
  const htmlContent = parse(content); // Utilise `parse` de `marked`

  return {
    frontMatter: data,
    content: htmlContent,
  };
}

export function getAllMarkdownFileNames() {
  try {
    const filePaths = getMarkdownFilePathsFromDirectory(contentDirectory);
    const fileNames = filePaths.map(filePath => path.relative(contentDirectory, filePath).replace(/\.md$/, ''));
    console.log('All Markdown file names:', fileNames); // Vérifie les noms des fichiers Markdown
    return fileNames;
  } catch (error) {
    console.error('Error reading markdown files:', error);
    return [];
  }
}