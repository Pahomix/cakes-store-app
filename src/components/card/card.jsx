import React from 'react';
import './card.css';
import Button from '../button/button';

export default function Card({ description, price, img, onClick }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="Image not found" />
      </div>
      <div className="card-info">
        <h5 className="card-price">{price} РУБ</h5>
        <p className="card-text">{description}</p>
        {/* <Button className="btn" onClick={onClick}>
          Заказать
        </Button> */}
      </div>
    </div>
  );
}
