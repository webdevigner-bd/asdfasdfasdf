import Header from '../header/header';
import Footer from '../footer/footer';
import MainAbout from '../main/main-about';

function LayoutAbout({ children }) {
  return (
    <div className="site-page" id="site-page">
      <Header />
      {children}
      <MainAbout />
      <Footer />
    </div>
  );
}

export default LayoutAbout;
