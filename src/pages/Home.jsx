import { useEffect } from 'react';
import { toast } from 'react-toastify';
import ImageComponent from '../component/AutoImageSlider';

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
        </div>
    );
}


export default Home;