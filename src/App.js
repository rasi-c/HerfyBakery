import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomePage from './Components/HomePage/homePage';
import Aboutus from './Components/AboutUs/aboutus';



function App() {
  return (
    <div className="App bg-[#f9f4ea] min-h-[100vh]  items-center  w-full">
      <Navbar />
      <section id="home" className="section">
        <HomePage/>
      </section>
      <section id="products" className="section">
        <Aboutus/>
      </section>
      <section id="about-us" className="section">
        <h1>About Us Section</h1>
        <p>Learn more about us.</p>
      </section>
      <section id="blog" className="section">
        <h1>Blog Section</h1>
        <p>Read our latest blog posts.</p>
      </section>
      <section id="contact-us" className="section">
        <h1>Contact Us Section</h1>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );
}

export default App;
