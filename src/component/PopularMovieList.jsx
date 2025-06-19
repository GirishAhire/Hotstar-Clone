import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import {
    Wrapper,
    Title,
    ScrollContainer,
    LeftScrollButton,
    RightScrollButton,
    MovieCard,
    MovieImage,
} from './PopularMovieList.styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'https://api.themoviedb.org/3/movie/popular?api_key=1e86608c59e51f09d448f280889a99d7';

function PopularMovieList() {

    const [movies, setMovies] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await axios.get(API_KEY);

                // console.log(response.data);
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
                {movies.map((movie) => (
                    <MovieCard key={movie.id}>
                        <MovieImage
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </MovieCard>
                ))}
            </ScrollContainer>

            <RightScrollButton onClick={scrollRight}>
                <ArrowForwardIos />
            </RightScrollButton>

        </Wrapper>
    );
}

export default PopularMovieList;
