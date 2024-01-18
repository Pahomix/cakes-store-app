import React from 'react';
import './cardsSection.css';
import { cakesInfo } from '../../data.js';
import Card from '../card/card.jsx';

export default function CardsSection() {
  return (
    <section className="cards-wrapper">
      {cakesInfo.map((data) => (
        <Card {...data} key={data.id} />
      ))}
    </section>
  );
}
