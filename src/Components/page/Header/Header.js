import React from 'react';
import { Locate, BackToTopButton, MainGui, Search, Catalog } from './components';

export const Header = () => {
  return (
    <>
      <Locate />
      <BackToTopButton />
      <MainGui />
      <Search />
      <Catalog />
    </>
  );
};
