'use client'
import Image from 'next/image'
import {useTheme} from 'next-themes'
import React, { useEffect, useState } from 'react'

interface ImageVawesProps {
    myclassName?:string
}

const ImageVawes = ({ myclassName }: ImageVawesProps) => {
    const { theme } = useTheme();
    const [clientSideRendered, setClientSideRendered] = useState(false);

    useEffect(() => {
        setClientSideRendered(true);
    }, []);

    if (!clientSideRendered) {
        return null;
    }

    return (
        <>
            {theme === "light" && (
                <Image
                    src="/Images/white.png" // Düzeltildi
                    alt="White waves"
                    width={2000}
                    height={62}
                    className={`w-full lg:block ${myclassName}`} // Düzeltildi
                />
            )}
            {theme === "dark" && (
                <Image
                    src="/Images/dark.png" // Düzeltildi
                    alt="Dark waves"
                    width={2000}
                    height={62}
                    className={`w-full lg:block ${myclassName}`} // Düzeltildi
                />
            )}
        </>
    );
};
    
export default ImageVawes