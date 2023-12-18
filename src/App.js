import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro/intro';
import Adventure from './components/Adventure/adventure';
import Destination from './components/destination/destination';
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Adventure />
      <Destination/>
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default App