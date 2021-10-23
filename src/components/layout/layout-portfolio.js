import Header from '../header/header';
import Footer from '../footer/footer';
import MainServices from '../main/main-portfolio';

function LayoutPortfolio({ children }) {
  return (
    <div className="site-page" id="site-page">
      <Header />
      {children}
      <MainServices />
      <Footer />
    </div>
  );
}

export default LayoutPortfolio;
