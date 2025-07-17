import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import logoutImage from '../assets/Logout.png';

import {
    StyledBox,
    StyledImage,
    StyledTitle,
    StyledSubtitle,
    ButtonGroup,
    CancelButton,
    LogoutButton,
    StyledCloseIcon,
} from './Logout.styles';

function Logout({ onCancel }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('loggedIn');
        navigate('/');
    };

    return (
        <StyledBox>
            <StyledCloseIcon onClick={onCancel}>
                <CloseIcon sx={{ fontSize: '2.5rem' }} />
            </StyledCloseIcon>

            <StyledImage src={logoutImage} alt="Logout Illustration" />

            <StyledTitle>Are you sure you want to log out?</StyledTitle>
            <StyledSubtitle>You will need to log in again to watch your favourites.</StyledSubtitle>

            <ButtonGroup>
                <CancelButton onClick={onCancel}>Cancel</CancelButton>
                <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
            </ButtonGroup>
        </StyledBox>
    );
}

export default Logout;