import React, { useState } from 'react';
import { Modal } from '@mui/material';
import LoginSection from './LoginSection';
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

function MySpace_CenterSection() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <StyledImage src={mySpaceLoginImage} alt="mySpaceLoginImage" />

            <Title>Login to JioHotstar</Title>

            <Description>
                Start watching from where you left off, personalise for kids and more
            </Description>

            <LoginButton onClick={handleOpen}>
                <FlexSpan>
                    <TextSpan>Log In</TextSpan>
                </FlexSpan>
            </LoginButton>

            <Modal open={open} onClose={handleClose}>
                <StyledModalBox>
                    <LoginSection handleClose={handleClose} />
                </StyledModalBox>
            </Modal>
        </>
    );
}

export default MySpace_CenterSection;
