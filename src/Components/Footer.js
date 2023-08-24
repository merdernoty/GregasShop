import React from 'react';
import "./Footer.scss";


function Footer() {
    return (
      <footer id="footer">
        <div className="footer_inner ffooill footer-light ext_view">
          <div className="bottom_wrapper">
            <div className="wrapper_inner">
              <div className="row bottom-middle">
                <div className="col-md-7">
                  <div className="bottom-menu">
                    <div className="items">
                      <div className="items-link">
                        <div className="item">
                          <div className="title1">
                            <a href="#top">Компания</a>
                          </div>
                         </div>
                        <div className="item">
                          <div className="title">
                            <a href="#top">О компании</a>
                          </div>
                        </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Акции</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Обзоры</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Политика</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-4">
                <div className="bottom-menu">
                  <div className="items">
                    <div className="items-link">
                      <div className="item">
                        <div className="title1">
                          <a href="#top">Информация</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Оптовые продажи</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Способы оплаты</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Условия доставки</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Возврат денежных средств</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-4">
                <div className="bottom-menu">
                  <div className="items">
                    <div className="items-link">
                      <div className="item">
                        <div className="title1">
                          <a href="#top">Помощь</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top">Вопрос-ответ</a>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-4">
                <div className="bottom-menu">
                  <div className="items">
                    <div className="items-link">
                      <div className="item">
                        <div className="title1">
                          <a href="#top">Способы связи</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="https://instagram.com/gregas.shop?igshid=MzRlODBiNWFlZA==" target="_blank" rel="nofollow noreferrer" title="Instagram">Instagram</a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="title">
                          <a href="#top" target="_blank" rel="nofollow" title="WhatsApp">WhatsApp</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-lg-6 col-md-12 col-sm-4 col-sm-offset-2">
          <div className="info contacts_block_footer">
            <span className="white_middle_text">Наши контакты</span>
            <div className="phone block">
              <div className="phone">
                <i className="svg svg-phone"></i>
                <a rel="nofollow" href="tel:+79964209691">+7 (996) 420-96-91</a>
              </div>
            </div>
            <div className="email block">
              <a href="mailto:goddezz88@mail.ru">store@greras.shops.ru</a>
            </div>
            <div className="address block">
              г. Махачкала,<br></br> ул. Коркмасова 14 
              <br></br>
              (Торговый центр <br></br>'ЦУМ' 1 Этаж)    
            </div>
            <div className="work-time">
              <div className="work-time__wrapper">
                <img src="path/" alt="Work Time"></img>
              </div>
              <div className="work-time__text">
                Пн.- Вс.
                <br />
                с 10:00 до 19:30
                <br />
                Без выходных
              </div>
            </div>
          </div>
        </div>
      </div>
          <div id="go-top">
		         <a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
		      </div>
      </footer>
    );
}

export default Footer;