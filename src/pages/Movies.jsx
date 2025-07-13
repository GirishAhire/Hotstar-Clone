import React from 'react';
import LazyMediaSliderWrapper from '../component/LazyMediaSliderWrapper';

function Movies() {
    return (
        <>
            <LazyMediaSliderWrapper title="Upcoming Movies" />
            <LazyMediaSliderWrapper title="Now Playing" />
            <LazyMediaSliderWrapper title="Popular Movies" />
            <LazyMediaSliderWrapper title="Top Rated" />
        </>
    );
}

export default Movies;