import React from 'react';
import './adventure.css'; // Import your CSS file for styling
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

const Card = ({ image, name, description }) => (
  <div className="card">
    <img src={image} alt={`${name} avatar`} />
    <h3>{name}</h3><br/>
    <p>{description}</p>
  </div>
);

const Adventure = () => (
  <div className="container">
    <div className="cards-section">
      <Card
        image={avatar1}
        name="User 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        image={avatar2}
        name="User 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        image={avatar3}
        name="User 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div className="content-section">
      <h2>Main Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
);

export default Adventure;
