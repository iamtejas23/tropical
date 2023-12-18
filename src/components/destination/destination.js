import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './destination.css'; // Create this CSS file for styling


const destinationsData = [
  {
    id: 1,
    name: 'Harvard University',
    image: 'https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?w=1060&t=st=1702875931~exp=1702876531~hmac=547515a6feedd35974b7c01ad0d7f682160b2b7aabf4ab499b1c90d9af2356e5',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Oxford University',
    image: 'https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?w=1060&t=st=1702875972~exp=1702876572~hmac=3b75314a69e7cf295bbf8fe81a44a98a3403512d4ca3191a8ea7ec31b15c5d09',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more destination objects as needed
];

const DestinationsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets and smaller devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="destinations-section">
      <h2>Destinations</h2>
      <Slider {...settings}>
        {destinationsData.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.info}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationsSection;
