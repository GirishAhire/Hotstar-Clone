import React, { useEffect, useRef, useState } from 'react';

import {
    Backdrop,
    PopupWrapper,
    ImageContainer,
    PopupImage,
    Content,
    CloseButton,
    ImageInfoOverlay,
    InfoItem,
    ButtonContainer,
    WatchNowButton,
    WatchlistButton,
    LeftShadowOverlay,
} from './MovieDetailPopup.styles';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';


import Loader from '../component/Loader';

const MovieDetailPopup = ({ movie, onClose }) => {
    const wrapperRef = useRef(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const genreMap = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Sci-Fi',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
        10763: 'News',
        10764: 'Reality',
        10765: 'Sci-Fi & Fantasy',
        10766: 'Soap',
        10767: 'Talk',
        10768: 'War & Politics',
        10759: 'Action & Adventure',
    };

    const getGenreNames = (ids = []) =>
        ids
            .map(id => genreMap[id])
            .filter(Boolean)
            .join(' | ');

    const getYear = (dateString) => {
        return dateString ? new Date(dateString).getFullYear() : 'N/A';
    };

    const getFullLanguageName = (langCode) => {
        if (!langCode) return 'Unknown';
        try {
            const languageName = new Intl.DisplayNames(['en'], { type: 'language' });
            return languageName.of(langCode);
        } catch (e) {
            console.error('Failed to get language name:', e);
            return langCode.toUpperCase();
        }
    };

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
                    <LeftShadowOverlay />
                    <PopupImage
                        src={movie.imageUrl}
                        alt={movie.title}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                    <ImageInfoOverlay>
                        <InfoItem><strong>Year:</strong> {getYear(movie.release_date)}</InfoItem>
                        <InfoItem><strong>Language:</strong> {getFullLanguageName(movie.original_language)}</InfoItem>
                        <InfoItem>{getGenreNames(movie.genre_ids)}</InfoItem>
                        <ButtonContainer>
                            <WatchNowButton>
                                <PlayArrowIcon />
                                Watch Now</WatchNowButton>
                            <WatchlistButton>+</WatchlistButton>
                        </ButtonContainer>
                    </ImageInfoOverlay>

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
