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
const SignupSection = lazy(() => import('./SignupSection'));
const LogoutConfirm = lazy(() => import('./Logout'));

function MySpace_CenterSection() {
    const [open, setOpen] = useState(false);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('userData');
        setIsLoggedIn(!!storedUser);
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setShowSignup(false);
    };

    return (
        <>
            <StyledImage src={mySpaceLoginImage} alt="mySpaceLoginImage" />

            <Title>Welcome to JioHotstar</Title>

            <Description>
                {isLoggedIn
                    ? 'Stream your favorites anytime, just where you left off.'
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
                                <LogoutConfirm onCancel={() => setLogoutModalOpen(false)} />
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
                                {showSignup ? (
                                    <SignupSection
                                        handleClose={handleClose}
                                        switchToLogin={() => setShowSignup(false)}
                                    />
                                ) : (
                                    <LoginSection
                                        handleClose={handleClose}
                                        switchToSignUp={() => setShowSignup(true)}
                                    />
                                )}
                            </Suspense>
                        </StyledModalBox>
                    </Modal>
                </>
            )}
        </>
    );
}

export default MySpace_CenterSection;
