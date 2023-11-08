'use client';

import {ThemeContext} from '../context/ThemeContext';
import React, { useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }): JSX.Element | null => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>
  }

  return null;
};

export default ThemeProvider;

