# Flick-investment-game
Investment diversification simulation game
# 💰 Investment Simulator

An interactive investment simulation game built with HTML, CSS, and JavaScript.

Players start with ₹1,00,000 and diversify their investment across different asset classes. Over 5 years, randomly selected economic scenarios affect the value of each investment.

## 🎯 Features

- Starting capital of ₹1,00,000
- Portfolio diversification across:
  - 📈 Stocks
  - 📊 Mutual Funds
  - 💵 Bonds
  - 🏦 Fixed Deposits
  - 🏠 Land
- Minimum 3 investment categories
- 5-year investment simulation
- Random economic scenarios
- Different returns for each asset class
- Year-by-year portfolio growth
- Compounded returns based on current asset values
- Final wealth and total return calculation
- Local leaderboard using browser localStorage
- Responsive interface

## 📊 Investment Scenarios

The simulation includes scenarios such as:

- 📈 Economic Boom
- 📉 Market Crash
- 🔥 Inflation Shock
- 🚀 Market Recovery
- 🌧️ Economic Slowdown
- 🏠 Strong Real Estate Cycle
- 💻 Technology Boom
- 🌍 Global Uncertainty

Each scenario applies different returns to each asset class.

## 🧮 How It Works

The player initially allocates ₹1,00,000 across at least three investment categories.

For each year, the selected scenario changes the value of every investment.

For example:

`New Value = Current Value × (1 + Return Rate / 100)`

The updated value is then carried into the following year.

This means the simulation uses year-by-year compounding rather than calculating every year from the original investment.

## 🚀 Running the Project

No backend or database is required.

Simply open `index.html` in a web browser.

Alternatively, the project can be deployed using GitHub Pages.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

## ⚠️ Disclaimer

This project is an educational simulation and does not provide financial advice.

The investment returns used in the simulation are fictional and are intended only for gameplay and educational purposes.


