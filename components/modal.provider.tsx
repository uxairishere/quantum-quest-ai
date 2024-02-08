'use client'

import React, { useEffect, useState } from 'react'
import { ProModal } from './pro-modal';

type Props = {}

const ModalProvider = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;
    return (
        <>
            <ProModal />
        </>
    )
}

export { ModalProvider }