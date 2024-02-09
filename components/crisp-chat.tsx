'use client';

import {Crisp} from 'crisp-sdk-web';
import { useEffect } from 'react';

export const CrispChat = () => {
    
    useEffect(() => {
        Crisp.configure("705cb5aa-2c7d-475e-a0e2-a83b97c43f64")
    }, [])
    
    return null;
}