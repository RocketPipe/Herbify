import React from 'react';
import Search from './Search'; 
import heroImage from '../images/hero-image.jpg'; // Adjust the path according to your image file location
import './Hero.css'; // Import your CSS file

const Hero = () => {
    return (
        <section className="hero-section"> 
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6"> 
                        <h1>Your Herbify Tagline</h1>
                        <p>Some supporting text about your app's purpose.</p>
                        <Search /> 
                    </div>
                    <div className="col-md-6"> 
                        <img src={heroImage} alt="Hero Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
