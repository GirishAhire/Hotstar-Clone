import React, { useState, useEffect } from 'react';

import { MovieCardWrapper, MovieImage } from './MovieCard.styles';

import Loader from '../component/Loader';

const MovieCard = ({ imageUrl, title }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleOnLoad = () => {
        setIsImageLoaded(true)
    }
    const handleOnError = () => {
        setIsImageLoaded(true)
    }

    useEffect(() => {
        setIsImageLoaded(false);
    }, [imageUrl]);

    return (
        <MovieCardWrapper>
            {!isImageLoaded && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Loader />
                </div>
            )}

            <MovieImage
                src={imageUrl}
                alt={title}
                loading="lazy"
                onLoad={handleOnLoad}
                onError={handleOnError}
                loaded={isImageLoaded}
            />
        </MovieCardWrapper>
    );
};

export default MovieCard;
