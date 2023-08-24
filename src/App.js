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
// import Text from './Components/Text';

export default function App() {
  return (
    <div className="App">
      <Locate/>
      <BackToTopButton/>
      <MainGui/>
      <Katalog/>
      <Search/>
      <hr></hr>
      <FotoButton/>
      <hr></hr>
      <New></New> 
      <hr></hr>
      <Hit></Hit>
      {/* <Text></Text>  */}
      <hr></hr>
      <Footer></Footer>
  
    </div>
    );
  }