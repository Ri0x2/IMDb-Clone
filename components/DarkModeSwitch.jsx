'use client';
import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false); // Correctly initializing state here
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            {mounted && (
                currentTheme === 'dark' ? (
                    <MdLightMode className='cursor-pointer text-2xl hover:text-amber-500 transition-all' onClick={() => setTheme('light')} />
                ) : (
                    <MdDarkMode className='cursor-pointer text-2xl hover:text-amber-500 transition-all' onClick={() => setTheme('dark')} />
                )
            )}
        </div>
    );
}
