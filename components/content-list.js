// components/content-list.js
import Link from 'next/link';

  const ContentList = ({ fileNames }) => {
    if (!fileNames || !Array.isArray(fileNames)) {
      return <p>No articles found.</p>;
    }

  return (
    <ul>
      {fileNames.map((fileName) => (
        <li key={fileName}>
          <Link href={`/${fileName}`}>
            {fileName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
