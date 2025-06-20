"use client";

import React, { useState } from 'react';
import { X, Minus, Plus, Gamepad2 } from 'lucide-react';

interface LockHornsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LockHornsModal: React.FC<LockHornsModalProps> = ({ isOpen, onClose }) => {
  const [selectedMode, setSelectedMode] = useState<'BULL-RUN' | 'FREE-RUN'>('BULL-RUN');
  const [amount, setAmount] = useState(0.1);
  const [time, setTime] = useState(60);

  if (!isOpen) return null;
  
  // Color styles
  const styles = {
    orange: 'bg-[#FF6B35] hover:bg-[#E55F2F]',
    darkBlue: 'bg-[#1A365D]',
    darkGray: 'bg-[#2D3748]',
    lightGray: 'bg-[#4A5568]',
    text: 'text-white',
    border: 'border border-[#4A5568]',
    cardBg: 'bg-[#1E1E2D]',
    headerBg: 'bg-[#252538]',
    buttonHover: 'hover:bg-[#3A3A4D]',
    buttonActive: 'active:bg-[#2D2D3D]'
  };

  const incrementAmount = () => setAmount(prev => Math.round((prev + 0.1) * 10) / 10);
  const decrementAmount = () => setAmount(prev => Math.max(0.1, Math.round((prev - 0.1) * 10) / 10));
  const incrementTime = () => setTime(prev => prev + 10);
  const decrementTime = () => setTime(prev => Math.max(10, prev - 10));

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className={`${styles.cardBg} w-full h-full border-t-4 border-orange-500 overflow-y-auto`}>
        {/* Header */}
        <div className="sticky top-0 z-10 text-center py-4 border-b border-gray-700 bg-[#1E1E2D]">
          <button 
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className={`w-12 h-12 ${styles.darkBlue} rounded-full flex items-center justify-center mx-auto mb-3`}>
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">LOCK HORNS</h2>
        </div>

        {/* Mode Selection */}
        <div className="p-6">
          <div className="flex mb-6">
            <button
              onClick={() => setSelectedMode('BULL-RUN')}
              className={`flex-1 py-3 text-sm font-bold rounded-l-lg transition-all duration-300 ${
                selectedMode === 'BULL-RUN' 
                  ? `${styles.darkBlue} text-white` 
                  : `${styles.darkGray} text-gray-300 ${styles.buttonHover}`
              }`}
            >
              BULL-RUN
            </button>
            <button
              onClick={() => setSelectedMode('FREE-RUN')}
              className={`flex-1 py-3 text-sm font-bold rounded-r-lg transition-all duration-300 ${
                selectedMode === 'FREE-RUN' 
                  ? `${styles.darkBlue} text-white` 
                  : `${styles.darkGray} text-gray-300 ${styles.buttonHover}`
              }`}
            >
              FREE-RUN
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            {selectedMode === 'BULL-RUN' ? (
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                SET AN AMOUNT AND TIME TO START PLAYING. WE'LL FIND SOMEONE YOU CAN LOCK HORNS WITH.
              </p>
            ) : (
              <div>
                <p className="text-gray-300 text-sm text-center leading-relaxed mb-4">
                  SET A TIME TO START PLAYING. WE'LL FIND SOMEONE YOU CAN LOCK HORNS WITH. THE WINNER WILL GET 2 TROPHIES
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-sm text-gray-400">WINNER GETS</span>
                  <span className="text-yellow-500">🏆</span>
                  <span className="text-sm font-bold text-white">2</span>
                </div>
              </div>
            )}
          </div>

          {/* Amount Setting (only for BULL-RUN) */}
          {selectedMode === 'BULL-RUN' && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">SET AMOUNT</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  aria-label="Decrease amount"
                  onClick={decrementAmount}
                  className={`w-10 h-10 ${styles.darkGray} ${styles.buttonHover} rounded-full flex items-center justify-center transition-colors duration-300`}
                >
                  <Minus className="w-4 h-4 text-white" />
                </button>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">💧</span>
                  <span className="text-2xl font-bold text-white min-w-[60px] text-center">
                    {amount.toFixed(1)}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Increase amount"
                  onClick={incrementAmount}
                  className={`w-10 h-10 ${styles.darkGray} ${styles.buttonHover} rounded-full flex items-center justify-center transition-colors duration-300`}
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Time Setting */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">SET TIME</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button
                type="button"
                aria-label="Decrease time"
                onClick={decrementTime}
                className={`w-10 h-10 ${styles.darkGray} ${styles.buttonHover} rounded-full flex items-center justify-center transition-colors duration-300`}
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">⏰</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-white min-w-[80px] text-center">
                  {time}s
                </span>
              </div>
              <button
                type="button"
                aria-label="Increase time"
                onClick={incrementTime}
                className={`w-10 h-10 ${styles.darkGray} ${styles.buttonHover} rounded-full flex items-center justify-center transition-colors duration-300`}
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-0 left-0 right-0 p-4 space-y-3 bg-[#1E1E2D] border-t border-gray-700">
            <button 
              className={`w-full ${styles.orange} text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              LOCK HORNS
            </button>
            <button 
              onClick={onClose}
              className={`w-full ${styles.darkGray} ${styles.buttonHover} text-white py-3 rounded-xl font-bold transition-all duration-300`}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockHornsModal;
