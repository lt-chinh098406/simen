import React from 'react';

import HeaderTop from './components/header-component/header-top/index';
import Header from './components/header-component/header/index';
import PageContainer from './components/container/page-container/index';
import Menu from './components/menu-component/menu/index';
import SideBar from './components/sidebar/index';
import Footer from './components/footer-component/footer/index';
import HomePage from './pages/homepage/index';

function App() {
  return (
    <>
      <HeaderTop />
      <PageContainer>
        <Header />
        <Menu />
        <div>
          <HomePage />
          <h1>Content</h1>
        </div>
        <SideBar />
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
