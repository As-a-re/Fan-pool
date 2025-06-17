"use client";

interface TokenCardProps {
  token: {
    symbol: string;
    icon: string;
    multiplier: string;
    change: string;
    isPositive: boolean;
    bgColor: string;
  };
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  return (
    <div className="relative bg-game-card rounded-xl p-3 hover:bg-gray-700 transition-all duration-300 cursor-pointer group">
      {/* Token Icon */}
      <div className={`w-12 h-12 ${token.bgColor} rounded-full flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-lg">{token.icon}</span>
      </div>
      
      {/* Token Symbol */}
      <div className="text-center">
        <div className="font-bold text-sm mb-1">{token.symbol}</div>
        
        {/* Change Badge */}
        <div className="absolute top-2 left-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            token.isPositive ? 'bg-red-600 text-white' : 'bg-red-600 text-white'
          }`}>
            {token.change}
          </span>
        </div>
        
        {/* Multiplier Badge */}
        <div className="absolute top-2 right-2">
          <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">
            {token.multiplier}
          </span>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-game-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};

export default TokenCard;
