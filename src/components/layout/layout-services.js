import Header from '../header/header';
import Footer from '../footer/footer';
import MainServices from '../main/main-services';

function LayoutServices({ children }) {
  return (
    <div className="site-page" id="site-page">
      <Header />
      {children}
      <MainServices />
      <Footer />
    </div>
  );
}

export default LayoutServices;
