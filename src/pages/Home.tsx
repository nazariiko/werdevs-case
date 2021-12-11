import React from 'react';

import { Calendar } from '../components/Calendar';

import photo from '../assets/images/desktop4.jpeg';

const Home = () => {
  return (
    <div className="home">
      <div className="left-side">
        <img src={photo} alt="coding" />
        <div className="promo">
          <h1>Choose the day for the coding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo, dolore natus quaerat
            eum in et amet provident maiores voluptatum?
          </p>
        </div>
      </div>
      <Calendar />
    </div>
  );
};

export default Home;
