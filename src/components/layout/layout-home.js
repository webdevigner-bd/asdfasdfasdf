import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';

function LayoutHome({ children }) {
  return (
    <div className="site-page" id="site-page">
      <Header />
      {children}
      <Main />
      <Footer />
    </div>
  );
}

export default LayoutHome;
