import { Footer } from '../../Components';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './BaseLayout.scss';
import { Header } from '../../Components';
import { SearchProvider } from '../../hooks/context/SearchContext';

export const BaseLayout = () => {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  );
};
