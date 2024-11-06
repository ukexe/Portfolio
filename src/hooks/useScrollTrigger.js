// src/hooks/useScrollTrigger.js

import { useEffect, useState } from 'react';

const useScrollTrigger = (offset = 100) => {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > offset) {
                setTriggered(true);
            } else {
                setTriggered(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    return triggered;
};

export default useScrollTrigger;
