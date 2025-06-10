import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import LoginSection from './LoginSection';
import mySpaceLoginImage from '../assets/New folder/my_space_login_in_jv.png';

function MySpace_CenterSection() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 951,
        height: 514,
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        bgcolor: '#16181f',
        outline: 'none',
    };

    return (
        <>
            <img
                src={mySpaceLoginImage}
                alt="mySpaceLoginImage"
                style={{
                    width: '425px',
                    height: '170px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                }}
            />

            <Typography
                sx={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#E1E6F0',
                    lineHeight: 1.4,
                }}
            >
                Login to JioHotstar
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'sans-serif',
                    fontSize: 20,
                    fontWeight: 100,
                    color: '#8F98B2',
                    lineHeight: 1.6,
                    maxWidth: '500px',
                    marginRight: '100px',
                    textAlign: 'center',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                Start watching from where you left off, personalise for kids and more
            </Typography>

            <Button
                onClick={handleOpen}
                sx={{
                    background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
                    color: '#fff',
                    width: '240px',
                    height: '55px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '12px 12px',
                    borderRadius: '8px',
                    '&:hover': {
                        background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
                        filter: 'brightness(1.1)',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    userSelect: 'text',
                }}
            >
                <span className="flex items-center" style={{ userSelect: 'text' }}>
                    <span
                        className="ON_IMAGE BUTTON2_SEMIBOLD"
                        style={{
                            userSelect: 'text',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textTransform: 'none',
                        }}
                    >
                        Log In
                    </span>
                </span>
            </Button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <LoginSection handleClose={handleClose} />
                </Box>
            </Modal>

        </>
    );
}


export default MySpace_CenterSection;