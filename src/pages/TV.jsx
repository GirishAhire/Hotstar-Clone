import React from 'react';
import LazyMediaSliderWrapper from '../component/LazyMediaSliderWrapper';

function TV() {
    return (
        <div>
            <LazyMediaSliderWrapper title="On The Air" />
            <LazyMediaSliderWrapper title="Airing Today" />
            <LazyMediaSliderWrapper title="Popular TV Shows" />
            <LazyMediaSliderWrapper title="Top Rated TV Shows" />

        </div>
    );
}

export default TV;