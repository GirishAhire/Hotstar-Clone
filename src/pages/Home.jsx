import { useEffect } from 'react';
import { toast } from 'react-toastify';

import ImageComponent from '../component/AutoImageSlider';
import LazyMediaSliderWrapper from '../component/LazyMediaSliderWrapper';

function Home() {
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userData'));
        const hasLoggedIn = sessionStorage.getItem('loggedIn');

        if (user && hasLoggedIn) {
            toast.success(`Welcome, ${user.username}!`);
            sessionStorage.removeItem('loggedIn');
        }
    }, []);

    return (
        <>

            <ImageComponent />

            <LazyMediaSliderWrapper title="Trending Now" />
            <LazyMediaSliderWrapper title="Upcoming Movies" />
            <LazyMediaSliderWrapper title="Now Playing" />
            <LazyMediaSliderWrapper title="Popular Movies" />
            <LazyMediaSliderWrapper title="Top Rated Movies" />

            <LazyMediaSliderWrapper title="Airing Today" />
            <LazyMediaSliderWrapper title="Popular TV Shows" />
            <LazyMediaSliderWrapper title="On The Air" />
            <LazyMediaSliderWrapper title="Top Rated TV Shows" />



        </>
    );
}

export default Home;