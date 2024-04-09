// components/slideshow.js
'use client';

import React, { useState, useEffect } from 'react';

import styles from './slideshow.css'; // Create this CSS module for the component

const Slideshow = () => {
    // Placeholder for your slideshow images
    const images = ['../../assets/jynxi.jpg', '../../assets/jynxi.jpg', '../../assets/jynxi.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Logic to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Logic to go to the previous image, not implemented yet
    // const prevImage = () => {
    //   setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };

    // Set up a timer for the slideshow
    React.useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    return (
        <div className={styles.slideshowContainer}>
            <img src={images[currentImageIndex]} alt="Slideshow image" className={styles.image} />
            {/* Add navigation buttons if needed */}
        </div>
    );
};

export default Slideshow;
