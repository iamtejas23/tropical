import React from 'react';
import './intro.css';
import bg from '../../assets/intro.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Discover the beauty of the tropics</span>
            <span className="introText">Tropical <br/>
Destinations</span>
            <span className="belowText">For Student</span>
            <p className='introPara'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer<br/> rutrum nisi. A nec nisl vitae </p>
            <Link><button className='btn'>SIGN UP</button></Link>
        </div>
        <div className="cir"><img src={bg} alt="profile" className="bg" /></div>
    </section>
  )
}

export default Intro;