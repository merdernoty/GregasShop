import { Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './BaseLayout.scss';
import { Header } from '../../components';

export const BaseLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
