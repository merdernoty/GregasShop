import React from 'react';
import { Cart, Favorite, UserProfile,Locate, BackToTopButton, MainGui, Search, Catalog } from './components';

export const Header = ({searchValue, setSearchValue}) => {
  return (
    <>
      <Locate />
      <BackToTopButton />
      <Cart/>
      <Favorite/>
      <UserProfile/>
      <MainGui />
      <Search  searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Catalog />
    </>
  );
};
