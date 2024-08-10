// pages/[slug].js

import { getMarkdownFileData, getAllMarkdownFilePaths } from '../lib/markdown';

export async function getStaticPaths() {
  const paths = getAllMarkdownFilePaths();
  console.log('Static paths:', paths); // Affiche les chemins pour débogage

  return {
    paths,
    fallback: false,
  }; 
  
}

export async function getStaticProps({ params }) {
  const filePath = params.slug;
  const { frontMatter: data, content } = getMarkdownFileData(filePath);

  console.log('Static props data:', { data, content }); // Affiche les données pour débogage

  return {
    props: {
      data,
      content,
    },
  };
}

const Page = ({ data, content }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Page;
