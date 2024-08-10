// components/content-list.js
const ContentList = ({ fileNames = [] }) => {
  return (
    <ul>
      {fileNames.map(fileName => (
        <li key={fileName}>
          <a href={`/${fileName.replace(/\.md$/, '')}`}>
            {fileName.replace(/\.md$/, '')}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
