import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from '../assets/BannerImages/banner-cricket.jpg';
import image2 from '../assets/BannerImages/banner-moana.jpg';
import image3 from '../assets/BannerImages/banner-laughter.jpg';
import image4 from '../assets/BannerImages/1322963-h-052e974a93a3.jpg';
import image5 from '../assets/BannerImages/1714673512667-i.jpg';
import image6 from '../assets/BannerImages/1748608647001-h.jpg';

import { SliderWrapper, SlideContainer, SlideImage } from './AutoImageSlider.styles';

const images = [image1, image2, image3, image4, image5, image6];

function AutoImageSlider() {
    return (
        <SliderWrapper>
            <Slide
                duration={4000}
                transitionDuration={1000}
                autoplay
                infinite
                arrows={false}
                easing="ease"
            >
                {images.map((image, index) => (
                    <SlideContainer key={index}>
                        <SlideImage src={image} alt={`Slide ${index}`} />
                    </SlideContainer>
                ))}
            </Slide>
        </SliderWrapper>
    );
}

export default AutoImageSlider;
