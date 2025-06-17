"use client"

import { useState } from "react"
import { Home, Users, Zap, Trophy, User, Signal, Wifi, Battery, Plus, Minus, Gamepad2, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function FanpoolApp() {
  const [showLockHornsModal, setShowLockHornsModal] = useState(false)
  const [modalType, setModalType] = useState<"free-run" | "bull-run">("free-run")
  const [selectedTab, setSelectedTab] = useState<"BULL-RUN" | "FREE-RUN">("BULL-RUN")
  const [setTime, setSetTime] = useState(60)
  const [setAmount, setSetAmount] = useState(0.1)

  const tokens = [
    { name: "SCLP", multiplier: "2.0x", change: "+0.91", color: "bg-gray-400", hasImage: false },
    { name: "CETUS", multiplier: "1.4x", change: "+0.91", color: "bg-teal-400", hasImage: false },
    { name: "BLUE", multiplier: "1.6x", change: "+0.91", color: "bg-white", hasImage: false },
    { name: "HIPPO", multiplier: "1.3x", change: "+0.91", color: "bg-blue-400", hasImage: false },
    { name: "LOFI", multiplier: "1.2x", change: "+0.91", color: "bg-blue-300", hasImage: false },
    { name: "SSWP", multiplier: "1.2x", change: "+0.91", color: "bg-black", hasImage: false },
    { name: "SUI", multiplier: "1.1x", change: "+0.91", color: "bg-blue-500", hasImage: false },
  ]

  const handleTokenClick = (tokenName: string) => {
    setShowLockHornsModal(true)
    setModalType("free-run")
  }

  const renderTokenIcon = (token: (typeof tokens)[0]) => {
    switch (token.name) {
      case "SCLP":
        return (
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-500"></div>
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
            <div className="text-white text-lg">🦛</div>
          </div>
        )
      case "LOFI":
        return (
          <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
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
            <span className="text-xs font-bold text-black">{token.name}</span>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <span>4:20</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

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

        {/* Curved SUI Banner with Token Grid */}
        <div className="relative mb-6">
          {/* Curved Blue Banner */}
          <div className="bg-blue-600 rounded-t-2xl p-3 flex justify-between items-center relative z-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-1 text-white">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Droplets className="w-4 h-4" />
                </div>
                <span className="font-semibold">$SUI</span>
              </div>
            ))}
          </div>

          {/* Green Token Grid with Vertical Stripes - Fully Rounded */}
          <div className="relative bg-gradient-to-b from-green-400 to-green-600 rounded-2xl p-6 pt-2">
            {/* Vertical Stripes */}
            <div className="absolute inset-0 flex rounded-2xl overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-green-300/30" : "bg-green-700/30"}`} />
              ))}
            </div>

            {/* Token Grid */}
            <div className="grid grid-cols-3 gap-4 relative z-10 pt-4">
              {tokens.map((token, index) => (
                <div
                  key={token.name}
                  className="relative flex flex-col items-center cursor-pointer"
                  onClick={() => handleTokenClick(token.name)}
                >
                  {/* Change indicator */}
                  <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-20">
                    {token.change}
                  </div>

                  {/* Multiplier */}
                  <div className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full z-20">
                    {token.multiplier}
                  </div>

                  {/* Token Circle with Icon */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 border-4 border-white shadow-lg relative z-10">
                    {renderTokenIcon(token)}
                  </div>

                  {/* Token Name */}
                  <span className="text-xs font-bold text-white mt-1">{token.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Your Bullz Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">YOUR BULLZ</h3>
          <div className="flex gap-3">
            <div className="bg-slate-800 rounded-lg p-4 flex-1">
              <div className="text-orange-500 mb-2">🐂</div>
              <div className="text-sm">FIGHTERS</div>
              <div className="text-xs text-gray-400">18W 4L</div>
              <div className="text-xs">|||</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 flex-1">
              <div className="text-orange-500 mb-2">🐂</div>
              <div className="text-sm">NIRVANA KL</div>
              <div className="text-xs text-gray-400">0W 0L</div>
              <div className="text-xs">||||</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 flex-1 flex items-center justify-center border-2 border-dashed border-gray-600">
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
      <Dialog open={showLockHornsModal} onOpenChange={setShowLockHornsModal}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-sm mx-auto">
          <div className="text-center p-6">
            <div className="mb-4">
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-bold mb-4">LOCK HORNS</h2>
            </div>

            {/* Tabs */}
            <div className="flex mb-6 bg-slate-700 rounded-lg p-1">
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === "BULL-RUN" ? "bg-slate-600 text-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setSelectedTab("BULL-RUN")}
              >
                BULL-RUN
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === "FREE-RUN" ? "bg-slate-600 text-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setSelectedTab("FREE-RUN")}
              >
                FREE-RUN
              </button>
            </div>

            {selectedTab === "FREE-RUN" ? (
              <>
                <p className="text-sm text-gray-300 mb-6">
                  SET A TIME TO START PLAYING. WE'LL FIND SOMEONE YOU CAN LOCK HORNS WITH. THE WINNER WILL GET 2
                  TROPHIES
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm">WINNER GETS</span>
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500 font-bold">2</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm">SET TIME</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSetTime(Math.max(10, setTime - 10))}
                        className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-lg">{setTime}s</span>
                      <button
                        onClick={() => setSetTime(setTime + 10)}
                        className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-300 mb-6">
                  SET AN AMOUNT AND TIME TO START PLAYING. WE'LL FIND SOMEONE YOU CAN LOCK HORNS WITH.
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm">SET AMOUNT</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSetAmount(Math.max(0.1, setAmount - 0.1))}
                        className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Droplets className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-lg">{setAmount.toFixed(1)}</span>
                      </div>
                      <button
                        onClick={() => setSetAmount(setAmount + 0.1)}
                        className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm">SET TIME</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs">J</span>
                        </div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-xs">⚡</span>
                        </div>
                      </div>
                      <span className="font-bold text-lg">{setTime}s</span>
                      <button
                        onClick={() => setSetTime(setTime + 10)}
                        className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="space-y-3">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                LOCK HORNS
              </Button>
              <Button
                variant="outline"
                className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600 py-3 rounded-lg"
                onClick={() => setShowLockHornsModal(false)}
              >
                CANCEL
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
