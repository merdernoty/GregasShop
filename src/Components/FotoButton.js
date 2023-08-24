import React from 'react'
import "./FotoButton.scss"
import foto1 from "../img/foto1.jpg"
import foto2 from "../img/foto2.jpg"
import foto3 from "../img/foto3.jpg"
import foto4 from "../img/foto4.jpg"
import foto5 from "../img/foto5.jpg"
import foto6 from "../img/foto6.jpg"
import foto7 from "../img/foto7.jpg"

function FotoButton() {
  return (
    <div className='Foto'>
       <div className='fotoItem'><a href='/home'><img src={foto1} alt="Foto 1"/></a><p>РЮКЗАКИ</p></div>
       <div className='fotoItem'><a href='/home'><img src={foto2} alt="Foto 2"/></a><p>АКСЕССУАРЫ</p></div>
       <div className='fotoItem'><a href='/home'><img src={foto3} alt="Foto 3"/></a><p>ГАДЖЕТЫ</p></div>
       <div className='fotoItem'><a href='/home'><img src={foto4} alt="Foto 4"/></a><p>ДЛЯ ДОМА</p></div>
       <div className='fotoItem'><a href='/home'><img src={foto5} alt="Foto 5"/></a><p>ИГРУШКИ</p></div>
       <div className='fotoItem'><a href='/home'><img src={foto6} alt="Foto 6"/></a><p>КАНЦЕЛЯРИЯ</p></div>
       <div className='fotoItem'><a href='/home'><img src={foto7} alt="Foto 7"/></a><p>ОДЕЖДА</p></div>
    </div> 
  )
}

export default FotoButton