import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
       
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Schedules</Link>
            <Link className="desktopMenuListItem">Membership</Link>
            <Link className="desktopMenuListItem">Pricing</Link>
        </div>
        <div className="desktopMenuBt">
        <Link className="desktopMenuBtn">Offers</Link>
        <Link className="desktopMenuBtn1">Courses</Link>
        </div>
    </nav>
  )
}

export default Navbar