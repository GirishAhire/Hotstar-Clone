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
const BASE_URL = import.meta.env.VITE_TMDB_POPULAR_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function PopularMovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [visibleCount, setVisibleCount] = useState(7);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const containerRef = useRef(null);

    const fetchMovies = async (pageNum) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&page=${pageNum}`);
            const newMovies = response.data.results || [];

            if (newMovies.length === 0) {
                setHasMore(false);
                return;
            }

            setMovies((prev) => {
                const existingIds = new Set(prev.map((m) => m.id));
                const unique = newMovies.filter((m) => !existingIds.has(m.id));
                return [...prev, ...unique];
            });

            setPage(pageNum);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchMovies(1);
    }, []);

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -1800, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: 1800, behavior: 'smooth' });

        setVisibleCount((prev) => {
            const nextCount = prev + 7;

            if (nextCount > movies.length - 7 && hasMore && !isLoading) {
                fetchMovies(page + 1);
            }

            return nextCount;
        });
    };

    return (
        <Wrapper>
            <Title>Popular Movies</Title>

            <LeftScrollButton onClick={scrollLeft}>
                <ArrowBackIos />
            </LeftScrollButton>

            <ScrollContainer ref={containerRef}>
                <Suspense fallback={<Loader />}>
                    {movies.slice(0, visibleCount).map((movie) => (
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
