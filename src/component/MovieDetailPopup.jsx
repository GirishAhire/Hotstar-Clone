import React from 'react';
import { Backdrop, PopupWrapper, PopupImage, Content, CloseButton } from './MovieDetailPopup.styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieDetailPopup = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <Backdrop onClick={onClose}>
            <PopupWrapper onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <PopupImage src={movie.imageUrl} alt={movie.title} />
                <Content>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview || 'No overview available.'}</p>
                </Content>
            </PopupWrapper>
        </Backdrop>
    );
};

export default MovieDetailPopup;
