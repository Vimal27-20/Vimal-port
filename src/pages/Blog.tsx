import React, { useState } from 'react';
import './Blog.css';
import photos1 from './../images/myphoto.jpeg';
import photos5 from './../Images/1.jpg';
import photos6 from './../Images/2.jpg';
import photos7 from './../Images/3.jpg';

import photos9 from './../Images/5.jpg';

const Blog: React.FC = () => {
  const images = [
     photos1,photos5,photos6,photos7,photos9
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="gallery-section"id='Gallery'> 
      <h2>Design Gallery</h2>
      <div className="gallery-container">
        <img src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} className="gallery-image" />
        <div className="button-container">
          <button className="gallery-button" onClick={handlePrevious}>Previous</button>
          <button className="gallery-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
