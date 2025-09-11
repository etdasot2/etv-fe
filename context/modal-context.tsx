// contexts/modal-context.tsx
'use client'
import Modal from '@/components/modal';
import React, { createContext, useContext, useState } from 'react';

type ModalContent = {
  message: string;
  onConfirm: () => void;
  showUI?: React.ReactNode;
};

type ModalContextType = {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
  isOpen: boolean;
  content: ModalContent | null;
};

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, content }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);