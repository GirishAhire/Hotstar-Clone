import { useEffect } from 'react';
import { toast } from 'react-toastify';

import ImageComponent from '../component/AutoImageSlider';
import PopularMovieList from '../component/PopularMovieList';

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
        </div>
    );
}


export default Home;