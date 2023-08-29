import './App.scss';
import New from './Components/New';
import Hit from './Components/Hit';
import Footer from './Components/Footer';
import MainGui  from './Components/MainGui';
import FotoButton from './Components/FotoButton';
import Search from './Components/Search';
import React from 'react';
import Katalog from './Components/Katalog';
import Locate from './Components/Locate';
import BackToTopButton from './Components/BackToTopButton';
import Text from './Components/Text';
import Slider from './Components/Slider/Slider';

export default function App() {
  return (
    <div className="App">
      <Locate/>
      <BackToTopButton/>
      <MainGui/>
    
      <Search/> <Katalog/>
      <hr class="grad"></hr>
      <Slider></Slider>
      <hr class="grad"></hr>
      <FotoButton/>
      <hr class="grad"></hr>
      <New></New> 
      <hr class="grad"></hr>
      <Hit></Hit>
      <hr class="grad"></hr>
      <Text></Text> 
      <hr class="grad"></hr>
      <Footer></Footer>

    </div>
    );
  }