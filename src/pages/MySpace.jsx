import React from 'react';
import { Box } from '@mui/material';
import Header from '../component/MySpace_Header';
import CenterSection from '../component/MySpace_CenterSection';

function MySpace() {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '75vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                gap: 2,
                marginTop: '50px',
                marginRight: '40px',
            }}
        >
            <Header />
            <CenterSection />
        </Box>
    );
}

export default MySpace;
