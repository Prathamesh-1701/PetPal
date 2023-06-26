import React from 'react';
import './home.css'; // Import the CSS file
import Card1 from './imgs/dog.jpg'
import Card2 from './imgs/cat.jpg'


const Home = () => {
  
  return (
    <div className="home-container">

      <div className="Banner">
       
      <h1 className="home-title">Welcome to the Pet Adoption Center</h1>
      <p className="home-description">Find your perfect furry companion today!</p>
      </div>

      <div className="home-links" style={{margin: "10px"}}>
        <a href="/pets" className="home-link">View Available Pets</a>
        <a href="/adopt" className="home-link">Adopt a Pet</a>
        <a href="/donate" className="home-link">Donate</a>
      </div>
      
      {/* this is code for cards  */}
      <div className="contentContainer1" style={{ display: "flex", flexWrap: "wrap" }}>

  <div className="card" style={{ flex: "1 0 200px", margin: "10px" }}>
  <div data-aos="flip-left">
    <img src={Card1} alt="img" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div className="card" style={{ flex: "1 0 200px", margin: "10px" }}>
    <img src={Card2} alt="img" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card" style={{ flex: "1 0 200px", margin: "10px" }}>
    <img src={Card1} alt="img" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card" style={{ flex: "1 0 200px", margin: "10px" }}>
    <img src={Card2} alt="img" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card" style={{ flex: "1 0 200px", margin: "10px" }}>
    <img src={Card1} alt="img" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

      </div>
      
      
      <button type="button" class="btn btn-success" style={{margin:"20px"}}>Show More</button>


      {/* This is about section */}
      <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About PetPal</h2>
        <p className="about-description">
          PetPal is a dedicated pet adoption platform that aims to connect loving families with adorable pets in need of a forever home.
        </p>
        <p className="about-description">
          Our mission is to promote animal welfare and reduce the number of homeless pets by facilitating successful adoptions and raising awareness about responsible pet ownership.
        </p>
        <p className="about-description">
          At PetPal, we believe that every pet deserves a loving and caring family. We work closely with shelters, rescue groups, and pet foster homes to provide a seamless adoption process and ensure the well-being of each animal.
        </p>
      </div>
    </section>



      {/* This is code for footer */}
      <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 PetPal Center. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>

    </div>
    
  );
};

export default Home;
