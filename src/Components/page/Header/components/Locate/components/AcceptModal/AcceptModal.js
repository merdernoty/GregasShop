import React, { useState } from 'react';
import styles from'./AcceptModal.scss';
import { Modal } from './components';
import classNames from 'classnames';

export const AcceptModal = ({ acceptActive, setAcceptActive }) => {
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false);
    setAcceptActive(false);
  };

  return (
    <div className={acceptActive ? 'acceptModal acceptActive' : 'acceptModal'} onClick={() => setAcceptActive(false)}>
      <div
        className={acceptActive ? 'acceptModal__content acceptActive' : 'acceptModal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='Local-Wrapper'>
        <h1 className='textLoc'>Ваш Город Махачкала?</h1>
        <button className="btn1" onClick={() => setAcceptActive(false)}>
          Все Верно
        </button>
        <button className="btn2" onClick={() => setModalActive(true)}>
          Сменить Город
        </button>
        </div>
      </div>
      <Modal active={modalActive} setActive={closeModal}></Modal>
    </div>
  );
};
