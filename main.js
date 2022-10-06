// Create button for user to select Heroes or Villains
// also created a variable to hide the screen on click of the "heroes" or "villains" buttons

const heroSelect = document.querySelector(`#heroes`);
const villainSelect = document.querySelector(`#villains`);
const container = document.querySelector(".container");
const unHide = document.querySelectorAll(".hd");
const btns = document.querySelectorAll("button.select");

// Variables that can be rewritten through the combat logic

var yourMove;
var compMove;
var savedCompMove;
var yourHealth = 1000;
var compHealth = 1000;

// Counter for the turns of the player and the AI

var totRounds = 0;

var res;
var playByPlay = document.getElementById("announcements");
var yourHealthBar = document.getElementById("yourHealthBar");
var compHealthBar = document.getElementById("compHealthBar");
var attackButton = document.getElementById("attack");
var counterButton = document.getElementById("counter");
var playAgain = document.getElementById("playAgain");

// Enables the combat buttons on page load

function enableButtons() {
  attackButton.disabled = false;
  counterButton.disabled = false;
}

// Combat triggers
function fight(id) {
  addRound();
  compMove(id);
  healthChange();
  gameOver();
}

// adds a turn to line 22
function addRound() {
  totRounds += 1;
}

//adds the counter action to attack
function counter(y, c) {
  var move = Math.floor(Math.random() * 5);
  if (move >= 3 && y === "attack") {
    res = "Zaas counter was successful! You took damage";
    yourHealth -= 100;
  } else if (move >= 3 && y === "counter") {
    res = "Your counter was successful! Zaas took damage";
    compHealth -= 100;
  } else if (move < 3 && y === "attack") {
    res = "Zaas counter failed! You dealt damage!";
    compHealth -= 150;
  } else if (move < 3 && y === "counter") {
    res = "Your counter was not successful! You were dealt damage!";
    yourHealth -= 150;
  }
}

// Displays results of the round
function roundResults(res) {
  playByPlay.innerHTML = res + "<br>";
}

function healthChange() {
  yourHealthBar.style.width = yourHealth / 10 + "%";
  compHealthBar.style.width = compHealth / 10 + "%";
}

function gameOver() {
  if (yourHealth === 0 || compHealth === 0) {
    res = "Game Over! ";
    roundResults(res);
    attackButton.disabled = true;
    counterButton.disabled = true;
    playAgain.disabled = true;
  }
}

// Takes the moves of the player and generates one for the AI and then runs the damage step
function compMove(id) {
  var move = Math.floor(Math.random() * 4 + 1);
  if (move <= 3) {
    savedCompMove = "attack";
  } else {
    savedCompMove = "counter";
  }
  res =
    "your move is <span>" +
    id +
    "</span> and the computers move is <span>" +
    savedCompMove +
    "</span> on round " +
    totRounds;
  damageStep(id, savedCompMove);
  roundResults(res);
}

// Processes both moves
function damageStep(y, c) {
  if (y === "attack" && c === "attack") {
    res = "Both players took damage";
    if (compHealth >= 10 && yourHealth >= 10) {
      compHealth -= 100;
      yourHealth -= 100;
    } else {
      compHealth = 0;
      yourHealth = 0;
    }
  } else if (y === "counter" && c === "counter") {
    res = "Defensive stances taken in vain";
  } else if (y === "attack" && c === "counter") {
    res = "Comp took a defensive stance and prepares to counter";
    counter(y, c);
  } else if (y === "counter" && c === "attack") {
    res = "You took a defensive stance and prepare to counter";
    counter(y, c);
  }
}

window.onload = enableButtons();

// This is a list of sprites I pulled and uploaded so that when the user clicks on the image from line 129, it will also add a sprite to the screen
const heroImages = {
  69: "https://i.ibb.co/5YwHWK9/batman-fgtsze-movie1989-stand-nes.png",
  63: "https://i.ibb.co/HT8BfP1/batgirl-fgtsze-60stv-akimboycraig.png",
  643: "https://i.ibb.co/dryKRQW/supergirl-fgtsze-90searly-fly-btimm-advsup21.png",
  306: "https://i.ibb.co/BZjhX75/anim-greenlantern-standardpose.gif",
  561: "https://i.ibb.co/54CDC4H/robin-fgtsze-tdrake1-akimbo1.png",
  720: "https://i.ibb.co/k6bXkrf/wonderwoman-fgtsze-70s-akimbo-forward.png",
  644: "https://i.ibb.co/gPD2jfj/superman-fgtsze-classic-akimbo-stand-lookahead.png",
  263: "https://i.ibb.co/BZcTDMz/flash-fgtsze-jaygarrick-classic-tiphat.png",
  97: "https://i.ibb.co/sqTfNLW/blackcanary-fgtsze-classic-ditherhose-blue-gloveadjust-lookahead.png",
  103: "https://i.ibb.co/s5QCyvJ/blacklightning-capfgt-en-90sissue1cover.png",
  123: "https://i.ibb.co/ZcqJtRD/bluebeetle-kord-actionpose-bbgunready.png",
  95: "https://i.ibb.co/jbRyPWY/captainmarvel-fgtsze-classic-smbattlehover.png",
  317: "https://i.ibb.co/4M8m2S9/hawkgirl-fgtsze-dcau-jllineupbtimmstand.png",
  432: "https://i.ibb.co/SwRPGWB/martianmanhunter-fgtsze-classic-jldcaugrouppose-lforward.png",
  524: "https://i.ibb.co/HGyRksW/powergirl-fgtsze-modclassic-akimbo.png",
  635: "https://i.ibb.co/vmvVCZs/steel-fgtsze-reign-stand-hammerhold1.png",
  730: "https://i.ibb.co/zbRWvvr/zatanna-fgtsze-magicclassic-tipofthehat.png",
  551: "https://i.ibb.co/HTLz5jn/redtornado-capfgt-classic-hover.gif",
  699: "https://i.ibb.co/B49QKkz/vixen-fgtsze-jli-totemtouch1.png",
  76: "https://i.ibb.co/d21zq0C/beastboy-fgtsze-2k3ish-stand1.png",
  194: "https://i.ibb.co/XkqxBWr/cyborg-fgtsze-v1-standcalm1.png",
  542: "https://i.ibb.co/9b0nDZ5/raven-fgtsze-classic-stand1.png",
  632: "https://i.ibb.co/W5pPC40/starfire-fgtsze-classic-fly1.png",
};

const villainImages = {
  93: "https://i.ibb.co/gWvFPXX/bizarro-fgtsze-classic-1-hover1.png",
  386: "https://i.ibb.co/9sRm3MW/killercroc-fgtsze-classic-fightstance-teethclosed.png",
  172: "https://i.ibb.co/fqWmsyv/cheetah-fgtsze-prich-v1-stance1.png",
  204: "https://i.ibb.co/F04GKmn/darkseid-original-tunic-handsbehindback.png",
  214: "https://i.ibb.co/3YYpFXd/deadshot-r-arm-faceright.png",
  216: "https://i.ibb.co/P5XyKL4/deathstroke-whoswho87-faceright.png",
  309: "https://i.ibb.co/Dwjqd3W/harleyquinn-fgtsze-classic-knockknee-gunmallet1.png",
  370: "https://i.ibb.co/z6Jx3WG/joker-fgtsze-classic-canestandangled2021.png",
  405: "https://i.ibb.co/r3XktQ1/lexluthor-fgtsze-armor80s-fisttaunt1.png",
  558: "https://i.ibb.co/tMqbtG7/riddler-fgtsze-suitgrn-caneleanthinking.png",
  522: "https://i.ibb.co/q71q3V0/poisonivy-fgtsze-tas1ish-batman181cover-sidelook.png",
  601: "https://i.ibb.co/HhNtrZC/sinestro-fgtsze-ylantern-hover1-fararmclench-right.png",
  609: "https://i.ibb.co/nB1Wy79/solomongrundy-fgtsze-classic-fightstance1.png",
  278: "https://i.ibb.co/MhRcvtg/zod-movie1-blk-blk-armsbehindback.png",
  60: "https://i.ibb.co/BstypkL/bane-fgtsze-classic-fgtstance.png",
  152: "https://i.ibb.co/zS1PR0D/captaincold-fgtsze-classic-stand-pistolready.png",
  514: "https://i.ibb.co/BcnW21y/penguin-fgtsze-classic-blueprp-umbrellalean.png",
  457: "https://i.ibb.co/tcsfBNW/mrfreeze-fgtsze-btaslike-ready1.png",
  294: "https://i.ibb.co/F0B57jb/gorillagrodd-fgtsze-pose1.png",
  136: "https://i.ibb.co/qMtkPgs/braniac-capfgt-e80s-calmstand1.png",
  576: "https://i.ibb.co/yVmynzK/scarecrow-dc-fgtsze-classic-pose1.png",
};


// user cannot select play without picking a alignment

// skills option not implemented yet error, try again later

// cant select first character, subscription access error,

// Fetch the "Superhero API"

fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then((response) => response.json())
  .then((data) => {
    // Put all of the Hero's and Villain's into seperate containers based on "alignment"

    // Seperates 20 selectable heroes and villains from the Superhero API

    const heroesId = [
      644, 69, 561, 720, 63, 643, 306, 263, 97, 103, 123, 95, 317, 432, 524,
      635, 730, 551, 699, 76, 194, 542, 632,
    ];
    const villainsId = [
      732, 93, 386, 172, 204, 214, 216, 309, 370, 405, 558, 522, 601, 609, 674,
      278, 60, 152, 514, 457, 294, 136, 576,
    ];
    const heroes = [];
    const villains = [];

    // Loops through the data to find the ID's of the characters and pushes them into a seperate array

    for (let hero of data) {
      if (heroesId.includes(hero.id)) {
        heroes.push(hero);
      } else if (villainsId.includes(hero.id)) {
        villains.push(hero);
      }
    }

    // holds the data for 5 random heroes and villains
    const randomHeroes = randomizer(heroes);
    const randomVillains = randomizer(villains);

    // creates nodeList of the character elements because they all have classes of ".name"
    const characterNames = document.querySelectorAll(".name");

    // created a loop to add an eventListener for both buttons, so when clicked, it should open a hidden form represented as the character select screen

    for (i of btns) {
      if (i.classList.contains("warning")) {
        continue;
      }
      i.addEventListener("click", (event) => {
        // prevents the page from refreshing
        event.preventDefault();

        //

        if (event.target.classList.contains("heros")) {
          // loops through the nodeList to add one random hero to an array if the condition is met

          characterNames.forEach((name, position) => {
            name.innerHTML = randomHeroes[position].name;
            const characterImages = document.createElement("img");
            characterImages.setAttribute("data-id", randomHeroes[position].id);
            characterImages.setAttribute(
              "src",
              randomHeroes[position].images.md
            );

            name.before(characterImages);

            characterImages.addEventListener("click", (event) => {
              const sprite = document.querySelector(".Sprite-1 img");
              const selected = document.querySelector(".selected");
              if (selected) {
                selected.classList.remove("selected");
              }
              event.target.classList.add("selected");
              sprite.setAttribute("src", heroImages[event.target.dataset.id]);
            });
          });
        } else if (event.target.classList.contains("villains")) {
          // loops through the nodeList to add one random villain to an array if the condition is met
          characterNames.forEach((name, position) => {
            name.innerHTML = randomVillains[position].name;
            const characterImages = document.createElement("img");
            characterImages.setAttribute(
              "data-id",
              randomVillains[position].id
            );
            characterImages.setAttribute(
              "src",
              randomVillains[position].images.md
            );
            name.before(characterImages);

            characterImages.addEventListener("click", (event) => {
              const sprite2 = document.querySelector(".Sprite-1 img");
              const selected = document.querySelector(".selected");
              if (selected) {
                selected.classList.remove("selected");
              }
              event.target.classList.add("selected");
              sprite2.setAttribute(
                "src",
                villainImages[event.target.dataset.id]
              );
            });
          });
        }

        // loops through each element with a title of "hd" so it can be unhidden on the click of either the Heroes or Villain buttons
        for (e of unHide) {
          e.classList.remove("hd");
        }

        btns.forEach((e) => {
          if (e.style.display === `none`) {
            e.style.display = `block`;
          } else {
            e.style.display = `none`;
          }
        });
      });
    }
  })
  .catch((error) => console.log(error));

// Function that takes the data of "heroes" & "villains" and returns random 5 characters from each array,
// doesn't repeat two or more of the same heroes or villains

function randomizer(array) {
  const randomCharacter = [];
  while (randomCharacter.length < 5) {
    const random = array[Math.floor(Math.random() * array.length)];
    if (!randomCharacter.includes(random)) {
      randomCharacter.push(random);
    }
  }
  return randomCharacter;
}

// 3. Radio button for good and bad, error for no selection

// 4. Do some type of calculation on the amount for the powerstats of the Hero's and Villain's - What statistic am I using to compare these two values? is it being subtracted by a static HP? How do the moves work

// 4. Seperating powerstats for each imported character


// How to Present:

// You’ll be making a 3 - 5 minute video about how you put together your project. As part of this presentation, you’ll be doing a quick walkthrough of what you can do on your app starting with a 30 second elevator pitch of what your project is, and at the end, you’ll answer at least 3 of the following questions:

// Did you have any ideas before you landed on this project? If so, why did you change to this project idea? If not, why pick this project in the first place?
// What was the hardest part of putting this project together?
// What was your biggest takeaway or lesson learned from doing this project, whether technical or organizational or in any other perspective?
// What would next steps be for this project, if you were to continue working on it?
// After having done this, what advice would you give someone who had to create their own portfolio project?


