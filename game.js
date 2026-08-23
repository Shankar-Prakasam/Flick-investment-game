let playerName = "";
let portfolio = {};
let currentPortfolio = {};
let currentWealth = STARTING_CAPITAL;
let yearIndex = 0;
let selectedScenarios = [];
let scoreSaved = false;

const money = value =>
  "₹" + Math.round(value).toLocaleString("en-IN");


function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function startInvestment() {
  const input = document.getElementById("playerName");
  const error = document.getElementById("nameError");
  const name = input.value.trim();

  if (!name) {
    error.textContent = "Please enter your name.";
    return;
  }

  playerName = name;
  error.textContent = "";

  resetInvestmentInputs();

  showScreen("investScreen");

  updatePortfolio();
}


function resetInvestmentInputs() {
  Object.keys(investments).forEach(key => {
    const input = document.getElementById(key);

    if (input) {
      input.value = 0;
    }
  });
}


function getPortfolioFromInputs() {
  const result = {};

  Object.keys(investments).forEach(key => {

    let value =
      Number(document.getElementById(key).value) || 0;

    if (value < 0) {
      value = 0;
    }

    result[key] = value;
  });

  return result;
}


function updatePortfolio() {

  const data = getPortfolioFromInputs();

  const invested =
    Object.values(data).reduce((a, b) => a + b, 0);

  const remaining =
    STARTING_CAPITAL - invested;

  const categories =
    Object.values(data).filter(value => value > 0).length;


  document.getElementById("invested").textContent =
    money(invested);

  document.getElementById("remaining").textContent =
    money(Math.max(0, remaining));

  document.getElementById("remainingBottom").textContent =
    money(Math.max(0, remaining));

  document.getElementById("categoryCount").textContent =
    `${categories} / 3`;


  const message =
    document.getElementById("investmentMessage");

  const button =
    document.getElementById("confirmBtn");


  if (invested > STARTING_CAPITAL) {

    message.className =
      "message error-msg";

    message.textContent =
      "⚠️ You cannot invest more than ₹1,00,000.";

    button.disabled = true;

  }

  else if (categories < 3) {

    message.className =
      "message error-msg";

    message.textContent =
      "⚠️ Invest in at least 3 different categories.";

    button.disabled = true;

  }

  else if (invested < STARTING_CAPITAL) {

    message.className =
      "message error-msg";

    message.textContent =
      `₹${(
        STARTING_CAPITAL - invested
      ).toLocaleString("en-IN")} is still unallocated. Allocate the full ₹1,00,000.`;

    button.disabled = true;

  }

  else {

    message.className =
      "message success-msg";

    message.textContent =
      "✅ Portfolio ready. You have met the 3-category rule.";

    button.disabled = false;
  }
}


function confirmPortfolio() {

  const data =
    getPortfolioFromInputs();

  const invested =
    Object.values(data).reduce((a, b) => a + b, 0);

  const categories =
    Object.values(data).filter(value => value > 0).length;


  if (
    invested !== STARTING_CAPITAL ||
    categories < 3
  ) {

    updatePortfolio();

    return;
  }


  portfolio = data;

  /*
   * IMPORTANT:
   * Create a separate copy that will change
   * every year during the simulation.
   */

  currentPortfolio = { ...portfolio };


  const summary =
    document.getElementById("lockedSummary");

  summary.innerHTML = "";


  Object.keys(portfolio).forEach(key => {

    if (portfolio[key] > 0) {

      const item =
        document.createElement("div");

      item.className =
        "locked-item";

      item.innerHTML = `
        <span>
          ${investments[key].icon}
          ${investments[key].name}
        </span>

        <strong>
          ${money(portfolio[key])}
        </strong>
      `;

      summary.appendChild(item);
    }
  });


  showScreen("readyScreen");
}


function beginSimulation() {

  currentWealth =
    STARTING_CAPITAL;

  yearIndex = 0;

  scoreSaved = false;


  /*
   * Start the simulation with the
   * player's original investment.
   */

  currentPortfolio = {
    ...portfolio
  };


  /*
   * Randomly select 5 scenarios
   * from the available scenarios.
   */

  selectedScenarios =
    [...scenarios]
      .sort(() => Math.random() - 0.5)
      .slice(0, YEARS);


  showScreen("simulationScreen");

  renderYear();
}


/*
 * THIS IS THE IMPORTANT FIX.
 *
 * Instead of calculating every year from
 * the original portfolio, we calculate
 * each investment from its CURRENT value.
 */

function calculateYear(
  currentPortfolio,
  scenario
) {

  const newPortfolio = {};

  let newTotal = 0;


  Object.keys(currentPortfolio).forEach(key => {

    const currentValue =
      currentPortfolio[key];

    const rate =
      scenario.returns[key] / 100;


    const newValue =
      currentValue * (1 + rate);


    newPortfolio[key] =
      newValue;


    newTotal += newValue;
  });


  return {
    portfolio: newPortfolio,
    total: newTotal
  };
}


function renderYear() {

  const scenario =
    selectedScenarios[yearIndex];


  document.getElementById("yearLabel").textContent =
    `YEAR ${yearIndex + 1} OF ${YEARS}`;


  document.getElementById("scenarioName").textContent =
    scenario.name;


  document.getElementById("scenarioIcon").textContent =
    scenario.icon;


  document.getElementById("scenarioTitle").textContent =
    scenario.name;


  document.getElementById("scenarioDescription").textContent =
    scenario.description;


  /*
   * Show the portfolio value BEFORE
   * this year's market event.
   */

  document.getElementById("currentWealth").textContent =
    money(currentWealth);


  /*
   * Show the returns for every asset.
   */

  const grid =
    document.getElementById("returnsGrid");

  grid.innerHTML = "";


  Object.keys(investments).forEach(key => {

    const card =
      document.createElement("div");

    card.className =
      "return-card";


    const rate =
      scenario.returns[key];


    const cls =
      rate >= 0
        ? "positive"
        : "negative";


    const sign =
      rate >= 0
        ? "+"
        : "";


    card.innerHTML = `
      <span>
        ${investments[key].icon}
        ${investments[key].name}
      </span>

      <strong class="${cls}">
        ${sign}${rate}%
      </strong>
    `;


    grid.appendChild(card);
  });


  /*
   * PREVIEW the result of this year's event.
   *
   * We do NOT permanently update the portfolio
   * here because the player hasn't clicked
   * CONTINUE yet.
   */

  const result =
    calculateYear(
      currentPortfolio,
      scenario
    );


  const newWealth =
    result.total;


  const change =
    newWealth - currentWealth;


  /*
   * Display the actual portfolio change.
   */

  document.getElementById("yearChange").textContent =
    `${change >= 0 ? "+" : ""}${money(change)}`;


  document.getElementById("yearChange").className =
    change >= 0
      ? "positive"
      : "negative";


  document.getElementById("yearWealth").textContent =
    money(newWealth);


  const nextButton =
    document.getElementById("nextYearBtn");


  nextButton.textContent =
    yearIndex === YEARS - 1
      ? "SEE FINAL RESULT →"
      : "CONTINUE →";
}


function nextYear() {

  const scenario =
    selectedScenarios[yearIndex];


  /*
   * Apply the current year's returns
   * to the CURRENT portfolio.
   */

  const result =
    calculateYear(
      currentPortfolio,
      scenario
    );


  /*
   * IMPORTANT:
   * Save the updated individual asset values.
   */

  currentPortfolio =
    result.portfolio;


  /*
   * Update total portfolio value.
   */

  currentWealth =
    result.total;


  yearIndex++;


  if (yearIndex >= YEARS) {

    showResult();

  } else {

    renderYear();
  }
}


function showResult() {

  showScreen("resultScreen");


  const finalWealth =
    currentWealth;


  const totalReturn =
    (
      (finalWealth - STARTING_CAPITAL) /
      STARTING_CAPITAL
    ) * 100;


  const won =
    finalWealth >= TARGET;


  document.getElementById("finalWealth").textContent =
    money(finalWealth);


  document.getElementById("totalReturn").textContent =
    `${totalReturn >= 0 ? "+" : ""}${totalReturn.toFixed(2)}%`;


  const resultIcon =
    document.getElementById("resultIcon");

  const title =
    document.getElementById("resultTitle");

  const subtitle =
    document.getElementById("resultSubtitle");

  const reward =
    document.getElementById("rewardBox");


  if (won) {

    resultIcon.textContent =
      "🏆";

    title.textContent =
      "Target Achieved!";

    subtitle.textContent =
      `Excellent work, ${playerName}! You grew your virtual wealth beyond ${money(TARGET)}.`;

    reward.innerHTML =
      "🎉 REWARD UNLOCKED — FLICK SMART INVESTOR";

  } else {

    resultIcon.textContent =
      "📚";

    title.textContent =
      "Not Quite There!";

    subtitle.textContent =
      `Good attempt, ${playerName}. Try a different portfolio and see if you can beat the target.`;

    reward.innerHTML =
      "🔄 Try again and build a new portfolio.";
  }


  renderLeaderboard();
}


function getLeaderboard() {

  try {

    return JSON.parse(
      localStorage.getItem(
        "flickLeaderboard"
      )
    ) || [];

  } catch {

    return [];
  }
}


function saveScore() {

  if (scoreSaved) {
    return;
  }


  const scores =
    getLeaderboard();


  scores.push({

    name:
      playerName || "Investor",

    score:
      Math.round(currentWealth),

    date:
      new Date().toISOString()

  });


  scores.sort(
    (a, b) => b.score - a.score
  );


  localStorage.setItem(
    "flickLeaderboard",
    JSON.stringify(
      scores.slice(0, 10)
    )
  );


  scoreSaved = true;


  document.getElementById(
    "saveMessage"
  ).className =
    "message success-msg";


  document.getElementById(
    "saveMessage"
  ).textContent =
    "✅ Score saved to this browser.";


  renderLeaderboard();
}


function renderLeaderboard() {

  const list =
    document.getElementById(
      "leaderboardList"
    );


  const scores =
    getLeaderboard();


  if (!scores.length) {

    list.innerHTML =
      `<p class="muted">
        No scores yet. Be the first investor!
      </p>`;

    return;
  }


  list.innerHTML =
    scores.map(
      (item, index) => `

        <div class="leader-row">

          <div class="rank">
            ${index + 1}
          </div>

          <strong>
            ${escapeHtml(item.name)}
          </strong>

          <strong>
            ${money(item.score)}
          </strong>

        </div>

      `
    ).join("");
}


function escapeHtml(text) {

  const div =
    document.createElement("div");

  div.textContent =
    text;

  return div.innerHTML;
}


function restartGame() {

  playerName = "";

  portfolio = {};

  currentPortfolio = {};

  currentWealth =
    STARTING_CAPITAL;

  yearIndex = 0;

  scoreSaved = false;


  document.getElementById(
    "playerName"
  ).value = "";


  document.getElementById(
    "saveMessage"
  ).textContent = "";


  showScreen("nameScreen");
}