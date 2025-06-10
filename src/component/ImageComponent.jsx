import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from '../assets/BannerImages/banner-cricket.jpg';
import image2 from '../assets/BannerImages/banner-moana.jpg';
import image3 from '../assets/BannerImages/banner-laughter.jpg';
import image4 from '../assets/BannerImages/1322963-h-052e974a93a3.jpg';
import image5 from '../assets/BannerImages/1714673512667-i.jpg';
import image6 from '../assets/BannerImages/1748608647001-h.jpg';

const images = [image1, image2, image3, image4, image5, image6];

function ImageComponent() {
    return (
        <div
            style={{
                position: 'relative',
                left: '90px', // adjust if your sidebar width changes
                width: 'calc(100vw - 90px)',
                maxWidth: '100%',
                height: 'auto',
                overflow: 'hidden',
                zIndex: 1000,
            }}
        >
            <Slide
                duration={4000}
                transitionDuration={1000}
                autoplay
                infinite
                arrows={false}
                easing="ease"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '80vh',
                            backgroundColor: 'black',
                        }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // keeps aspect ratio and fills nicely
                                transition: 'transform 1s ease-in-out',
                            }}
                        />
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default ImageComponent;
