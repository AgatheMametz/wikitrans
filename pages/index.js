import ContentList from '../components/content-list';
import { getAllMarkdownFilePaths, getAllMarkdownFileNames } from '../lib/markdown';

export async function getStaticProps() {
  const filePaths = getAllMarkdownFilePaths();
  // console.log('File paths in getStaticProps:', filePaths); // Vérifie les chemins des fichiers
  const fileNames = getAllMarkdownFileNames() || [];
  // console.log('File names in getStaticProps:', fileNames); // Vérifie les noms des fichiers

  return {
    props: {
      fileNames,
    },
  };
}

const Home = ({ fileNames }) => {
  return (
    <div>
      <h1>Liste des Articles</h1>
      <ContentList fileNames={fileNames} />
    </div>
  );
};

export default Home;
