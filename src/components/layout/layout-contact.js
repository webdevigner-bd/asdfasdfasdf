import Header from '../header/header';
import Footer from '../footer/footer';
import MainContact from '../main/main-contact';

function LayoutContact({ children }) {
  return (
    <div className="site-page" id="site-page">
      <Header />
      {children}
      <MainContact />
      <Footer />
    </div>
  );
}

export default LayoutContact;
