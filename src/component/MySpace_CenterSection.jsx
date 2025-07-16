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
                    <LoginButton onClick={() => setOpen(true)}>
                        <FlexSpan>
                            <TextSpan>Log In</TextSpan>
                        </FlexSpan>
                    </LoginButton>

                    <Modal open={open} onClose={() => setOpen(false)}>
                        <StyledModalBox>
                            <Suspense fallback={<Loader />}>
                                <LoginSection handleClose={() => setOpen(false)} />
                            </Suspense>
                        </StyledModalBox>
                    </Modal>
                </>
            )}
        </>
    );
}

export default MySpace_CenterSection;
