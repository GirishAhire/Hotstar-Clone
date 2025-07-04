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
        <div>

            <ImageComponent />

            <LazyMediaSliderWrapper title="Trending Now" />
            <LazyMediaSliderWrapper title="Upcoming Movies" />
            <LazyMediaSliderWrapper title="Popular Movies" />
            <LazyMediaSliderWrapper title="Popular TV Shows" />
            <LazyMediaSliderWrapper title="Top Rated" />
            <LazyMediaSliderWrapper title="On The Air" />


        </div>
    );
}

export default Home;