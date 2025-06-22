import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import axios from 'axios';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import {
    Wrapper,
    Title,
    ScrollContainer,
    LeftScrollButton,
    RightScrollButton,
} from './PopularMovieList.styles';

import Loader from '../component/Loader';

const MovieCard = lazy(() => import('./MovieCard'));

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
const API_URL = import.meta.env.VITE_TMDB_API_URL;

function PopularMovieList() {
    const [movies, setMovies] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(API_URL);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -1800, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: 1800, behavior: 'smooth' });
    };

    return (
        <Wrapper>
            <Title>Popular Movies</Title>

            <LeftScrollButton onClick={scrollLeft}>
                <ArrowBackIos />
            </LeftScrollButton>

            <ScrollContainer ref={containerRef}>
                <Suspense fallback={<Loader />}>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            title={movie.title}
                        />
                    ))}
                </Suspense>
            </ScrollContainer>

            <RightScrollButton onClick={scrollRight}>
                <ArrowForwardIos />
            </RightScrollButton>
        </Wrapper>
    );
}

export default PopularMovieList;
