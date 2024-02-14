import React from 'react';
import Header from '../src/assets/Header';
import Nav from '../src/assets/Nav';
import Footer from '../src/assets/Footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Header className='headerNav'>
      <Nav />
    </Header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;
