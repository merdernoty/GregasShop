import '../App.scss';
import Footer from '../Components/Footer';
import MainGui  from '../Components/MainGui';
import Search from '../Components/Search';
import React from 'react';
import Katalog from '../Components/Katalog';
import Locate from '../Components/Locate';
import BackToTopButton from '../Components/BackToTopButton';

export default function Collection() {
    return (
      <div className="App">
        <Locate/>
        <BackToTopButton/>
        <MainGui/>
        <Katalog/>
        <Search/> 
        <hr class="grad"></hr>
        <Footer></Footer>
      </div>
      );
    }