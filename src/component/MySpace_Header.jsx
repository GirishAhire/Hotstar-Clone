import React from 'react';
import { Button } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function MySpace_Header() {
    return (
        <Button
            sx={{
                fontFamily: 'sans-serif',
                fontSize: '1.2rem',
                position: 'absolute',
                top: 16,
                right: 16,
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#FFFFFF14',
                padding: '15px 30px',
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.3)',
                },
            }}
        >
            <span className="flex items-center" style={{ userSelect: 'text' }}>
                <span
                    className="ON_IMAGE BUTTON2_SEMIBOLD"
                    style={{
                        userSelect: 'text',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <HelpOutlineIcon />
                    Help & Support
                </span>
            </span>
        </Button>
    );
}

export default MySpace_Header;
