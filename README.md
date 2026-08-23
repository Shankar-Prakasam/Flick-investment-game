## FLICK ₹1 Lakh Investment Challenge ##

An interactive, browser-based financial simulation game created for the FLICK Club Expo.

Players start with ₹1,00,000, build a diversified investment portfolio, and experience different simulated market conditions over 5 years. Each year, a randomly selected economic scenario changes the value of the player's investments.

⚠️ Educational Simulation Only: This game uses fictional returns for educational and entertainment purposes. It is not a real investment or trading platform and does not provide financial advice.

🎯 Game Objective

The objective is to grow the initial ₹1,00,000 investment over a 5-year simulation and try to reach the target of:

🎯 ₹1,20,000

Players must make strategic decisions about how to distribute their money across different asset classes.

💰 Investment Categories

Players can diversify their ₹1,00,000 across:

📈 Stocks
📊 Mutual Funds
💵 Bonds
🏦 Fixed Deposits (FD)
🏠 Land
Portfolio Rules
Starting capital: ₹1,00,000
The entire ₹1,00,000 must be allocated.
Players must invest in at least 3 different categories.
Players may distribute their money across 3, 4, or 5 categories.
Investment amounts cannot be negative.
Returns are fictional and predefined for the game.
📊 Market Scenarios

During the 5-year simulation, five different scenarios are randomly selected from the available market events.

The game currently includes:

Scenario	Description
📈 Economic Boom	Business activity is strong and investor confidence is rising.
📉 Market Crash	A sudden market shock causes equity investments to fall sharply.
🔥 Inflation Shock	Inflation rises and different asset classes react differently.
🚀 Market Recovery	Markets recover as confidence returns after a difficult period.
🌧️ Economic Slowdown	Growth slows and investors become more cautious.
🏠 Strong Real Estate Cycle	Demand for property increases across the market.
💻 Technology Boom	Innovation and technology-led growth lift market sentiment.
🌍 Global Uncertainty	Global uncertainty increases volatility and investors seek stability.

The return percentages for each scenario are defined in scenarios.js.

🧮 How the Simulation Works

The player begins with:

₹1,00,000


The initial investment is divided among the selected asset classes.

Each year, the selected market scenario applies a different return to each investment.

The basic calculation is:

New Value = Current Value × (1 + Return Rate / 100)

Example

If ₹20,000 is invested in stocks and the scenario gives stocks a +23% return:

₹20,000 × 1.23 = ₹24,600


The following year's return is then applied to ₹24,600, not the original ₹20,000.

This means the simulation uses year-by-year compounding.

Important

Each asset's current value is carried forward independently.

For example:

Year 1
Stocks → ₹20,000 → ₹24,600

Year 2
Stocks → ₹24,600 → calculated using Year 2 return

Year 3
Stocks → Year 2 value → calculated using Year 3 return


This process continues for all 5 years.

🎮 Game Flow

The game follows these steps:

Enter the player's name.
Allocate ₹1,00,000 across the investment categories.
Ensure at least 3 categories are selected.
Lock the portfolio.
Start the 5-year simulation.
Experience a randomly selected market scenario each year.
View the return for each asset.
Continue to the next year.
After Year 5, view the final portfolio value.
Compare the result with the ₹1,20,000 target.
Optionally save the score to the leaderboard.
🏆 Target & Scoring
Starting Capital

₹1,00,000

Target

₹1,20,000

If the final portfolio value is at least ₹1,20,000:

🏆 Target Achieved!

Otherwise:

📚 Not Quite There!

The final result also displays the total percentage return.

🏅 Leaderboard

The game includes a local leaderboard using browser localStorage.

The leaderboard stores:

Player name
Final score
Date

Only the top 10 scores are retained.

Important

The leaderboard is local to the browser/device.

This means scores are not automatically shared between different players or devices.

For example:

Player A's browser
    ↓
Leaderboard A

Player B's browser
    ↓
Leaderboard B


A future version could use a backend database to create a shared online leaderboard.

📁 Project Structure
FLICK-Investment-Game/
│
├── index.html
├── style.css
├── game.js
├── investments.js
├── scenarios.js
├── Logo.jpeg
├── README.md
└── assets/
    └── (optional additional assets)

File Description
File	Purpose
index.html	Game screens, structure and interface
style.css	Design, styling and responsive layout
game.js	Game logic, simulation and leaderboard
investments.js	Investment category definitions
scenarios.js	Simulated market scenarios and returns
Logo.jpeg	FLICK logo
README.md	Project documentation
assets/	Optional images and additional assets
🛠️ Technologies

This project is built using:

HTML5
CSS3
JavaScript
Browser LocalStorage

No backend or database is required for the current version.

💻 Requirements

To run the project locally, you need:

VS Code (recommended)
A modern web browser
Live Server extension for VS Code (optional)

Supported modern browsers include Chrome, Edge, Firefox and Safari.

🚀 How to Run
Option 1 — VS Code + Live Server
Open the project folder in VS Code.
Install the Live Server extension if needed.
Right-click index.html.
Select Open with Live Server.
The game will open in your browser.
Option 2 — Direct Browser

You can also double-click:

index.html


and open the game directly in a modern browser.

🌐 GitHub Pages

The game can be deployed as a static website using GitHub Pages.

Because the project does not require a backend, it can be hosted directly from the repository.

Recommended GitHub Pages configuration:

Source: Deploy from a branch
Branch: main
Folder: / (root)


After deployment, the game can be accessed through the GitHub Pages URL.

🔄 Updating the Game

To make changes:

Edit the required file.
Save the changes.
Commit the changes to GitHub.
GitHub Pages automatically redeploys the updated version.

For example, to change market returns, edit:

scenarios.js


To change game behaviour, edit:

game.js


To change the design, edit:

style.css

📈 Educational Purpose

This project demonstrates concepts such as:

Portfolio diversification
Investment risk
Market volatility
Asset allocation
Compounding
Scenario-based financial simulation
Basic financial decision-making

The scenarios and returns are intentionally simplified for gameplay.

⚠️ Disclaimer

This project is an educational simulation and not financial advice.

All investment returns, market scenarios and asset performance figures shown in the game are fictional and predefined.

They should not be interpreted as:

Actual investment returns
Guaranteed returns
Financial forecasts
Trading recommendations
Investment advice

Players should not use the results of this game to make real-world investment decisions.

👥 FLICK Club Expo

Created as an interactive financial education game for the FLICK Club Expo.

💡 Learn. Invest. Simulate. Grow.
