'use client';
import React from 'react';
import { X, Check } from 'lucide-react';

interface CryptoAndNetworkProps {
  open: boolean;
  onClose: () => void;
}

const CryptoAndNetworkPopup: React.FC<CryptoAndNetworkProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 bg-black rounded-t-2xl transition-transform duration-300 transform ${
        open ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Network</h2>
          <div onClick={onClose}>
            <X className="w-6 h-6 text-red-500" />
          </div>
        </div>
        <div className="bg-black/50 rounded-lg p-2 mb-4 border border-red-500/30">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-3 flex items-center justify-center">
              <span className="text-black font-bold">T</span>
            </div>
            <span className="text-white font-bold">USDT</span>
          </div>
        </div>
        <div className="bg-black/50 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-white font-bold">TRON (TRC20)</span>
            </div>
            <Check className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-gray-400 text-sm">EXPECTED ARRIVAL TIME≈1 MINUTE</p>
          <p className="text-gray-400 text-sm">MINIMUM DEPOSIT ≈1 USDT</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoAndNetworkPopup;
