"use client"

import { useState } from "react"
import { Home, Users, Zap, Trophy, User, Plus, Minus, Gamepad2, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import TokenCard from '@/components/tokencard'
import LockHornsModal from '@/components/lockhornsmodal'

export default function FanpoolApp() {
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
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-500"> <img src="/images/b.png" alt="Sclp" /> </div>
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
            <div className="text-white text-lg"> <img src="/images/a.png" alt="Hippo" /> </div>
          </div>
        )
      case "LOFI":
        return (
          <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-600 rounded-sm"> <img src="/images/c.png" alt="Lofi" /> </div>
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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="font-medium">degen</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xs">💎</span>
            </div>
            <span>4.12</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span>1,384</span>
          </div>
        </div>
      </div>

      {/* Fighters Section */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">FIGHTERS</h2>
            <p className="text-sm text-gray-400">18% WIN RATE</p>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">
            PLAY NOW
          </Button>
        </div>

        <div className="relative mb-6 w-full">
          {/* Curved Blue Banner */}
          <div className="relative w-full h-20 md:h-32 overflow-hidden rounded-t-[30px] md:rounded-t-[50px] mb-6">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/Sui.png"
              alt="Curved Blue Banner"
            />
          </div>

          {/* Green Token Grid with Vertical Stripes - Top Rounded */}
          <div className="relative bg-gradient-to-b from-[#207400] to-[#1f6d00] mt-[-5vh] h-[45vh] rounded-t-[20px]">
            {/* Vertical Stripes */}
            <div className="absolute inset-0 flex rounded-2xl overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-[#227900]" : "bg-[#1f6f00]"}`} />
              ))}
            </div>

            {/* Token Grid */}
            <div className={`space-y-4 relative z-10 h-full flex flex-col justify-center transition-all duration-300 ${showLockHornsModal ? "blur-sm pointer-events-none" : ""}`}>
              {tokenRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`flex ${row.length === 2 ? "justify-between" : "justify-center"} w-full`}
                >
                  {row.map((token) => (
                    <div
                      key={token.symbol}
                      onClick={() => handleTokenClick(token.symbol)}
                      className="cursor-pointer"
                    >
                      <TokenCard token={token} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Focused TokenCard (above blur) */}
            {showLockHornsModal && selectedToken && (
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                {tokenRows.flat().map(token =>
                  token.symbol === selectedToken ? (
                    <TokenCard
                      key={token.symbol}
                      token={token}
                    />
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>

        {/* Your Bullz Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">YOUR BULLZ</h3>
          <div className="flex gap-3">
            <div className="bg-slate-800 rounded-lg p-2 flex-1">
              <div className="text-orange-500 mb-2">🐂</div>
              <div className="text-sm">FIGHTERS</div>
              <div className="text-xs text-gray-400">18W 4L</div>
              <div className="text-xs">|||</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-2 flex-1">
              <div className="text-orange-500 mb-2">🐂</div>
              <div className="text-sm">NIRVANA KL</div>
              <div className="text-xs text-gray-400">0W 0L</div>
              <div className="text-xs">||||</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-2 flex-1 flex items-center justify-center border-2 border-dashed border-gray-600">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 flex justify-around py-3">
        <div className="flex flex-col items-center">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">HOME</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Users className="w-6 h-6 mb-1" />
          <span className="text-xs">LEAGUES</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Zap className="w-6 h-6 mb-1" />
          <span className="text-xs">LIVE</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Trophy className="w-6 h-6 mb-1" />
          <span className="text-xs">RANKING</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">PROFILE</span>
        </div>
      </div>

      {/* Lock Horns Modal */}
      <LockHornsModal
        isOpen={showLockHornsModal}
        onClose={() => {
          setShowLockHornsModal(false)
          setSelectedToken(null)
        }}
      />
    </div>
  )
}