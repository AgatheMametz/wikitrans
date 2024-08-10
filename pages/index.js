// pages/index.js
import ContentList from '../components/content-list';
import { getAllMarkdownFileNames } from '../lib/markdown';

export async function getStaticProps() {
  const fileNames = getAllMarkdownFileNames() || []; // Assure-toi que fileNames est un tableau

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
