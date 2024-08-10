// components/Layout.js
import Header from './header.js'; // Assure-toi d'importer ton Header
import ContentList from './content-list.js';



const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContentList />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
