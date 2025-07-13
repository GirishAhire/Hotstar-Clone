import React from 'react';
import { LoaderWrapper, StyledCircularProgress } from './Loader.styles';

const Loader = () => {
    return (
        <LoaderWrapper>
            <StyledCircularProgress thickness={5} size={70} />
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1492ff" />
                        <stop offset="50%" stopColor="#0860c4" />
                        <stop offset="100%" stopColor="#eb0066" />
                    </linearGradient>
                </defs>
            </svg>
        </LoaderWrapper>
    );
};

export default Loader;
