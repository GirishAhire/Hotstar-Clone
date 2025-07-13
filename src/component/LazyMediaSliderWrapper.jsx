import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import Loader from '../component/Loader';
import { Wrapper, Placeholder } from './LazyMediaSliderWrapper.styles';

const MediaSlider = lazy(() => import('./MediaSlider'));

function LazyMediaSliderWrapper({ title }) {

    const [shouldRender, setShouldRender] = useState(false);
    const observerRef = useRef(null);

    const titleToApiMap = {
        'Popular Movies': '/movie/popular',
        'Trending Now': '/trending/all/day',
        'Upcoming Movies': '/movie/upcoming',
        'Top Rated Movies': '/movie/top_rated',
        'Top Rated TV Shows': '/tv/top_rated',
        'Popular TV Shows': '/tv/popular',
        'On The Air': '/tv/on_the_air',
        'Now Playing': '/movie/now_playing',
        'Airing Today': '/tv/airing_today',

    };

    const apiPath = titleToApiMap[title];
    const apiUrl = `${import.meta.env.VITE_TMDB_BASE_URL}${apiPath}`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '100px 0px',
                threshold: 0.1,
            }

        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Wrapper ref={observerRef}>
            {shouldRender ? (
                <Suspense fallback={<Loader />}>
                    <MediaSlider title={title} apiUrl={apiUrl} />
                </Suspense>
            ) : (
                <Placeholder>
                    <Loader />
                </Placeholder>
            )}
        </Wrapper>
    );
}

export default LazyMediaSliderWrapper;
