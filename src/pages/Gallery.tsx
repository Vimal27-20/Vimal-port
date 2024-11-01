import React, { useState } from 'react';
import './Gallery.css';
import photos1 from './../images/myphoto.jpeg';
import photos2 from './../images/testimg.jpg';
import photos3 from './../images/stair-story-1.jpg';
import photos4 from './../images/flower.jpg';

const Gallery: React.FC = () => {
  const images = [
     photos1,
     photos2,
     photos3,
     photos4
    
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

export default Gallery;
