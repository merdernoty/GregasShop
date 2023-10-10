    
import './Cart.scss';


export const Cart = () => {
  return (
    <div className='box'>\
      <h1>Корзина</h1>
      <h4>Главная - Корзина</h4>
      <section>
        <li>Самовывоз с магазина в Махачкале (цум, 1 этаж, Коркмасова 14) </li>
        <li>Доставка почтой России</li>
        <li>Доставка компаниями СДЭК или Pick point</li>
        <br></br>
        <ul>Расчёт доставки индивидуальный.</ul>
      </section>
    </div>
  );
};