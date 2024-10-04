import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import ScrollToTop from '@components/ui/ScrollToTop';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
