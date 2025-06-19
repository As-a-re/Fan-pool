"use client"

import { useState } from "react"
import { Home, Users, Zap, Trophy, User, Plus, Minus, Gamepad2, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import TokenCard from '@/components/tokencard'
import LockHornsModal from '@/components/lockhornsmodal'

export default function TradingDashboard() {
  const [showLockHornsModal, setShowLockHornsModal] = useState(false)
  const [modalType, setModalType] = useState<"free-run" | "bull-run">("free-run")
  const [selectedTab, setSelectedTab] = useState<"BULL-RUN" | "FREE-RUN">("BULL-RUN")
  const [setTime, setSetTime] = useState(60)
  const [setAmount, setSetAmount] = useState(0.1)
  const [selectedToken, setSelectedToken] = useState<string | null>(null)

  const tokens = [
    { symbol: "SCLP", icon: "/images/b.png", multiplier: "2.0x", change: "+0.91", isPositive: true, bgColor: "bg-gray-400" },
    { symbol: "CETUS", icon: "", multiplier: "1.4x", change: "+0.91", isPositive: true, bgColor: "bg-teal-400" },
    { symbol: "BLUE", icon: "", multiplier: "1.6x", change: "+0.91", isPositive: true, bgColor: "bg-white" },
    { symbol: "HIPPO", icon: "/images/a.png", multiplier: "1.3x", change: "+0.91", isPositive: true, bgColor: "bg-blue-400" },
    { symbol: "LOFI", icon: "/images/c.png", multiplier: "1.2x", change: "+0.91", isPositive: true, bgColor: "bg-blue-300" },
    { symbol: "SSWP", icon: "", multiplier: "1.2x", change: "+0.91", isPositive: true, bgColor: "bg-black" },
    { symbol: "SUI", icon: "", multiplier: "1.1x", change: "+0.91", isPositive: true, bgColor: "bg-blue-500" },
  ]

  const tokenRows = [
    [tokens[0]],
    [tokens[1], tokens[2]],
    [tokens[3]],
    [tokens[4], tokens[5]],
    [tokens[6]],
  ];

  const handleTokenClick = (tokenSymbol: string) => {
    setSelectedToken(tokenSymbol)
    setShowLockHornsModal(true)
    setModalType("free-run")
  }

  const renderTokenIcon = (token: (typeof tokens)[0]) => {
    switch (token.symbol) {
      case "SCLP":
        return (
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-500"> 
              <img src="/images/b.png" alt="Sclp" className="w-full h-full rounded-full" /> 
            </div>
          </div>
        )
      case "CETUS":
        return (
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-6 bg-teal-300 rounded-full transform rotate-45"></div>
          </div>
        )
      case "BLUE":
        return (
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-800 transform rotate-45"></div>
          </div>
        )
      case "HIPPO":
        return (
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
            <img src="/images/a.png" alt="Hippo" className="w-6 h-6 rounded-full" />
          </div>
        )
      case "LOFI":
        return (
          <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
            <img src="/images/c.png" alt="Lofi" className="w-6 h-6 rounded-sm" />
          </div>
        )
      case "SSWP":
        return (
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <div className="text-white text-lg">∞</div>
          </div>
        )
      case "SUI":
        return (
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <Droplets className="w-6 h-6 text-white" />
          </div>
        )
      default:
        return (
          <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-black">{token.symbol}</span>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">D</span>
          </div>
          <span className="font-medium">degen</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span className="text-sm">4.12</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">1,394</span>
          </div>
        </div>
      </div>

      {/* Fighters Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4 px-4">
          <div>
            <h2 className="text-lg font-bold">FIGHTERS</h2>
            <p className="text-xs text-gray-400">18% WIN RATE</p>
          </div>
          <Button 
            onClick={() => setShowLockHornsModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105"
          >
            PLAY NOW
          </Button>
        </div>

        {/* Full Width Blue SUI Section */}
        <div className="relative mb-0 w-screen">
          {/* Curved Blue Banner */}
          <div className="relative w-screen h-20 md:h-32 overflow-hidden rounded-t-[30px] md:rounded-t-[50px] mb-6">
            <img
              className="absolute inset-0 w-screen h-full object-cover"
              src="/images/Sui.png"
              alt="Curved Blue Banner"
            />
          </div>

        // ...existing code...

{/* Full Width Green Section with Token Grid */}
<div 
  className="relative bg-gradient-to-b from-[#1b6200] to-[#258200] overflow-hidden w-screen rounded-top-[40px]"
  style={{
    marginTop: '-55px',
    height: '45vh',
    paddingTop: '50px'
  }}
>
  {/* Vertical Stripes Background */}
  <div className="absolute inset-0 flex w-full" style={{ borderRadius: '50px 50px 0 0' }}>
    {Array.from({ length: 12 }).map((_, i) => (
      <div 
        key={i} 
        className={`flex-1 ${i % 2 === 0 ? 'bg-[#217600]' : 'bg-[#1f6e00]'}`} 
      />
    ))}
  </div>

  {/* Token Grid - Only this section blurs */}
  <div className={`relative z-10 px-8 h-full flex flex-col justify-center space-y-4 transition-all duration-300 ${showLockHornsModal ? "blur-sm pointer-events-none" : ""}`}>
    {tokenRows.map((row, rowIdx) => (
      <div
        key={rowIdx}
        className={`flex ${row.length === 2 ? "justify-center gap-16" : "justify-center"} items-center`}
      >
        {row.map((token) => (
          <div
            key={token.symbol}
            onClick={() => handleTokenClick(token.symbol)}
            className={`cursor-pointer relative flex flex-col items-center ${row.length === 2 ? "mt-[-1vh] ml-[5vw]" : ""}`}
          >
            {/* Change Badge */}
            <div className="absolute -top-2 -left-3 z-20">
              <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                {token.change}
              </span>
            </div>
            {/* Multiplier Badge */}
            <div className="absolute -top-2 -right-3 z-20">
              <span className="text-xs bg-black text-white px-1.5 py-0.5 rounded-full">
                {token.multiplier}
              </span>
            </div>
            {/* Token Icon Circle */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 relative z-10 shadow-lg">
              <div className={`w-12 h-12 ${token.bgColor} rounded-full flex items-center justify-center`}>
                {renderTokenIcon(token)}
              </div>
            </div>
            {/* Token Symbol */}
            <span className="text-xs font-bold text-white">{token.symbol}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>      </div>
      </div>

      {/* Your Bullz Section - Positioned closer to bottom */}
      <div className="px-4 mb-20">
        <h3 className="text-sm font-bold text-gray-400 mb-3">YOUR BULLZ</h3>
        <div className="flex space-x-3">
          <div className="bg-slate-800 rounded-lg p-3 text-center min-w-[80px]">
            <div className="text-orange-500 mb-1">🔥</div>
            <div className="text-xs font-bold">FIGHTERS</div>
            <div className="text-xs text-gray-400">10W 4L</div>
            <div className="text-xs">|||</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-3 text-center min-w-[80px]">
            <div className="text-orange-500 mb-1">🔥</div>
            <div className="text-xs font-bold">NIRVANA KL</div>
            <div className="text-xs text-gray-400">0W 0L</div>
            <div className="text-xs">||||</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-3 text-center min-w-[80px] border-2 border-dashed border-gray-600 flex items-center justify-center">
            <span className="text-gray-500 text-2xl">+</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-gray-700">
        <div className="flex justify-around items-center py-3">
          <div className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6" />
            <span className="text-xs">HOME</span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-gray-500">
            <Users className="w-6 h-6" />
            <span className="text-xs">LEAGUES</span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-gray-500">
            <Zap className="w-6 h-6" />
            <span className="text-xs">LIVE</span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-gray-500">
            <Trophy className="w-6 h-6" />
            <span className="text-xs">RANKING</span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-gray-500">
            <User className="w-6 h-6" />
            <span className="text-xs">PROFILE</span>
          </div>
        </div>
      </div>

      {/* Lock Horns Modal */}
      <LockHornsModal 
        isOpen={showLockHornsModal} 
        onClose={() => {
          setShowLockHornsModal(false);
          setSelectedToken(null);
        }} 
      />
    </div>
  );
}