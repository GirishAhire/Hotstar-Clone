import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import Loader from '../component/Loader';

const MediaSlider = lazy(() => import('./MediaSlider'));

function LazyMediaSliderWrapper({ title, apiUrl }) {
    const [shouldRender, setShouldRender] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={observerRef} style={{ minHeight: '400px' }}>
            {shouldRender ? (
                <Suspense fallback={<Loader />}>
                    <MediaSlider title={title} apiUrl={apiUrl} />
                </Suspense>
            ) : (
                <div style={{ height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Loader />
                </div>
            )}
        </div>
    );
}

export default LazyMediaSliderWrapper;