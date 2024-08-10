// pages/[slug].js
import { getMarkdownFileData, getAllMarkdownFileNames } from '../lib/markdown.js';

export async function getStaticPaths() {
  const fileNames = getAllMarkdownFileNames();
  const paths = fileNames.map(fileName => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false, // ou true si tu veux supporter les chemins non encore générés
  };
}

export async function getStaticProps({ params }) {
  const fileName = `${params.slug}.md`;
  const { data, content } = getMarkdownFileData(fileName);

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
