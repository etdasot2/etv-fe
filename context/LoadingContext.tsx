// context/LoadingContext.tsx
'use client'

import DefaultLoading from '@/components/loaders/DefaultLoading';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LoadingContextType {
  loading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setGlobalLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setGlobalLoading }}>
      {children}
      {loading && <DefaultLoading />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};