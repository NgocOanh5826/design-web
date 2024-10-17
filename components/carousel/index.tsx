"use client"
import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://cf.shopee.vn/file/vn-11134258-7ras8-m1dtgcpmy9zw74",
        "https://cf.shopee.vn/file/vn-11134258-7ras8-m0y8okydum2515", 
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Tự động chuyển đổi hình ảnh sau mỗi 3 giây
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Dọn dẹp khi component unmount
    }, []);

    return (
        <div>
            <button onClick={prevSlide}>Previous</button>
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Carousel;
