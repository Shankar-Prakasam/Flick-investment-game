const scenarios = [
  {
    name: "Economic Boom",
    icon: "📈",
    description: "Business activity is strong and investor confidence is rising.",
    returns: { stocks: 23, mutualFund: 18, bonds: 9, fd: 6.5, land: 13 }
  },
  {
    name: "Market Crash",
    icon: "📉",
    description: "A sudden market shock causes equity investments to fall sharply.",
    returns: { stocks: -18, mutualFund: -10, bonds: 5, fd: 6.5, land: 3 }
  },
  {
    name: "Inflation Shock",
    icon: "🔥",
    description: "Inflation rises and different asset classes react differently.",
    returns: { stocks: -8, mutualFund: -5, bonds: 6, fd: 6.5, land: 10 }
  },
  {
    name: "Market Recovery",
    icon: "🚀",
    description: "Markets recover as confidence returns after a difficult period.",
    returns: { stocks: 24, mutualFund: 20, bonds: 8, fd: 6.5, land: 9 }
  },
  {
    name: "Economic Slowdown",
    icon: "🌧️",
    description: "Growth slows and investors become more cautious.",
    returns: { stocks: -10, mutualFund: -5, bonds: 6.5, fd: 6.5, land: 7 }
  },
  {
    name: "Strong Real Estate Cycle",
    icon: "🏠",
    description: "Demand for property increases across the market.",
    returns: { stocks: 10, mutualFund: 9, bonds: 7, fd: 6.5, land: 16 }
  },
  {
    name: "Technology Boom",
    icon: "💻",
    description: "Innovation and technology-led growth lift market sentiment.",
    returns: { stocks: 26, mutualFund: 16, bonds: 7, fd: 6.5, land: 9 }
  },
  {
    name: "Global Uncertainty",
    icon: "🌍",
    description: "Global uncertainty increases volatility and investors seek stability.",
    returns: { stocks: -17, mutualFund: -9, bonds: 6.5, fd: 6.5, land: 8 }
  }
];
