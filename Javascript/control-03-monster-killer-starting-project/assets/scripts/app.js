const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK"; //MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; //MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_PLAYER_REVIVES = "PLAYER REVIVES";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValues() {
  const enteredValue = prompt("Max monster life", "100");

  const parsedValue = parseInt(enteredValue);

  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "Invalid user input, not a number!" };
  }

  return parsedValue;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert("Use a number dumbass...");
} finally {
  console.log("Finally...");
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: event,
    value: value,
    finalPlayerHealth: playerHealth,
    finalMosterHealth: monsterHealth,
  };

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "Monster";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
    case LOG_EVENT_PLAYER_HEAL:
    case LOG_EVENT_PLAYER_REVIVES:
      logEntry.target = "Player";
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: event,
        value: value,
        finalPlayerHealth: playerHealth,
        finalMosterHealth: monsterHealth,
      };
      break;
    default:
      logEntry = {};
      break;
  }

  battleLog.push(logEntry);

  // if (
  //   event === LOG_EVENT_PLAYER_ATTACK ||
  //   event === LOG_EVENT_PLAYER_STRONG_ATTACK
  // ) {
  //   logEntry.target = "Monster";
  // } else if (event === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry.target = "Player";
  // } else if (event === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry.target = "Player";
  // } else if (event === LOG_EVENT_PLAYER_REVIVES) {
  //   logEntry.target = "Player";
  // } else if (event === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     finalPlayerHealth: playerHealth,
  //     finalMosterHealth: monsterHealth,
  //   };
  // }
}

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;

  // in this case remove BonusLifee() works different as it resets then number
  removeBonusLife();
  hasBonusLife = true;

  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("Shadows live twice");
    writeToLog(
      LOG_EVENT_PLAYER_REVIVES,
      "Player Revived",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("God Defeated");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "God Defeated",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Died");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "You Died",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("No Contest");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "No Contest",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }

  const x = 12 && 23;

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  //   if (currentPlayerHealth === chosenMaxLife) {
  //     alert("Youre at max health");
  //     endRound();
  //     return;
  //   }

  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You cant heal to more than your max initial healt.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    HEAL_VALUE,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function printLoghandler() {
  for (let i = 0; i < 3; i++) {
    console.log("---------");
  }

  // let j = 0;
  // outterWhile: do {
  //   console.log("outter", j);
  //   innerFor: for (let k = 0; k < 5; k++) {
  //     if (k === 3) {
  //       break outterWhile;
  //     }
  //     console.log("inner", k);
  //   }

  //   j++;
  // } while (j < 3);

  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }

  // console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLoghandler);
