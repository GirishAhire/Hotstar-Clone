import React from 'react';
import { MovieCardWrapper, MovieImage } from './MovieCard.styles';

const MovieCard = ({ imageUrl, title }) => {
    return (
        <MovieCardWrapper>
            {imageUrl ? (
                <MovieImage src={imageUrl} alt={title} loading="lazy" />
            ) : (
                <span>{title}</span>
            )}
        </MovieCardWrapper>
    );
};

export default MovieCard;
