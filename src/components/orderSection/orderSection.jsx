import './orderSection.css';

import React from 'react';
import Button from '../button/button';

export default function OrderSection() {
  return (
    <section className="order-section">
      <h2 className="order-section-title">
        Чтобы сделать заказ, укажите телефон
      </h2>
      <h4 className="order-section-description">
        Мы перезвоним Вам в течение часа
      </h4>
      <div className="number-input">
        <div className="form">
          <div className="icon">
            <img src="/icon.png" alt="Image" />
          </div>
          <form action="">
            <input type="text" placeholder="+7 (___) ___-__-__" />
            {/* <input type="text" placeholder="Ваше имя" /> */}
          </form>
        </div>

        <Button>Заказать</Button>
      </div>
    </section>
  );
}
