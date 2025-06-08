import React, { useEffect, useState } from 'react';

const images = [
    'https://picsum.photos/seed/image1/1200/800',
    'https://picsum.photos/seed/image2/1200/800',
    'https://picsum.photos/seed/image3/1200/800',
    'https://picsum.photos/seed/image4/1200/800',
    'https://picsum.photos/seed/image5/1200/800',
];

function ImageComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);   
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: '90px',
                width: '100%',
                height: '80vh',
                overflow: 'hidden',
                zIndex: 1000,
            }}
        >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                    src={images[currentIndex]}
                    alt="Slideshow"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 0.5s ease',
                    }}
                />
            </div>
        </div>
    );
}

export default ImageComponent;
