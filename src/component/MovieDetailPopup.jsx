import React, { useEffect, useRef, useState } from 'react';
import {
    Backdrop,
    PopupWrapper,
    ImageContainer,
    PopupImage,
    Content,
    CloseButton,
} from './MovieDetailPopup.styles';

import Loader from '../component/Loader';

const MovieDetailPopup = ({ movie, onClose }) => {
    const wrapperRef = useRef(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <Backdrop>
            {!isImageLoaded && <Loader />}
            <PopupWrapper ref={wrapperRef} $isVisible={isImageLoaded}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ImageContainer>
                    <PopupImage
                        src={movie.imageUrl}
                        alt={movie.title}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                </ImageContainer>
                <Content>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </Content>
            </PopupWrapper>

        </Backdrop>
    );
};

export default MovieDetailPopup;
