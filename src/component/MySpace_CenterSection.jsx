import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Modal } from '@mui/material';

import mySpaceLoginImage from '../assets/my_space_login_in_jv.png';

import {
    StyledImage,
    Title,
    Description,
    LoginButton,
    FlexSpan,
    TextSpan,
    StyledModalBox
} from './MySpace_CenterSection.styles';

import Loader from './Loader';

const LoginSection = lazy(() => import('./LoginSection'));
const LogoutConfirm = lazy(() => import('./Logout'));

function MySpace_CenterSection() {
    const [open, setOpen] = useState(false);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('userData');
        setIsLoggedIn(!!storedUser);
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        sessionStorage.removeItem('loggedIn');
        setIsLoggedIn(false);
        setLogoutModalOpen(false);
        window.location.reload();
    };

    return (
        <>
            <StyledImage src={mySpaceLoginImage} alt="mySpaceLoginImage" />

            <Title>Welcome to JioHotstar</Title>

            <Description>
                {isLoggedIn
                    ? 'Enjoy watching content tailored for you.'
                    : 'Start watching from where you left off, personalise for kids and more'}
            </Description>

            {isLoggedIn ? (
                <>
                    <LoginButton onClick={() => setLogoutModalOpen(true)}>
                        <FlexSpan>
                            <TextSpan>Log out</TextSpan>
                        </FlexSpan>
                    </LoginButton>

                    <Modal open={logoutModalOpen} onClose={() => setLogoutModalOpen(false)}>
                        <StyledModalBox>
                            <Suspense fallback={<Loader />}>
                                <LogoutConfirm
                                    onCancel={() => setLogoutModalOpen(false)}
                                    onLogout={handleLogout}
                                />
                            </Suspense>
                        </StyledModalBox>
                    </Modal>
                </>
            ) : (
                <>
                    <LoginButton onClick={handleOpen}>
                        <FlexSpan>
                            <TextSpan>Log In</TextSpan>
                        </FlexSpan>
                    </LoginButton>

                    <Modal open={open} onClose={handleClose}>
                        <StyledModalBox>
                            <Suspense fallback={<Loader />}>
                                <LoginSection handleClose={handleClose} />
                            </Suspense>
                        </StyledModalBox>
                    </Modal>
                </>
            )}
        </>
    );
}

export default MySpace_CenterSection;
