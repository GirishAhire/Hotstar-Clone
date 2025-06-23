import { useEffect } from 'react';
import { toast } from 'react-toastify';

import ImageComponent from '../component/AutoImageSlider';
import PopularMovieList from '../component/PopularMovieList';
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
            <PopularMovieList />

            <LazyMediaSliderWrapper
                title="Trending Now"
                apiUrl="https://api.themoviedb.org/3/trending/all/day"
            />
            <LazyMediaSliderWrapper
                title="Upcoming Movies"
                apiUrl="https://api.themoviedb.org/3/movie/upcoming"
            />

            <LazyMediaSliderWrapper
                title="Top Rated"
                apiUrl="https://api.themoviedb.org/3/movie/top_rated"
            />

            <LazyMediaSliderWrapper
                title="Popular TV Shows"
                apiUrl="https://api.themoviedb.org/3/tv/popular"
            />
        </div>
    );
}

export default Home;