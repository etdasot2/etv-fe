'use client';

import { useEffect } from 'react';
import { useInfoModal } from '@/context/InfoModalContext';
import { setGlobalInfoText } from '@/lib/api';

export default function GlobalInfoSetup() {
    const { setInfoText } = useInfoModal();

    useEffect(() => {
        // Register the global info text function
        setGlobalInfoText(setInfoText);
    }, [setInfoText]);

    return null; // This component doesn't render anything
}
