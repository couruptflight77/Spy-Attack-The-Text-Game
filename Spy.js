//The Map
var map = [];

map[0] = "Level 1 Infiltration";
map[1] = "Level 2 Lobby";
map[2] = "Level 3 Floor 1";
map[3] = "Level 4 Floor 2";
map[4] = "Level 5 Floor 3";
map[5] = "Level 6 Floor 4";
map[6] = "Level 7 Genetics Lab";
map[7] = "Level 8 Escape";

var images = [];

images[0] = "Infiltration.jpg";
images[1] = "Lobby.jpg";
images[2] = "Floor1.jpg";
images[3] = "Floor2.jpg";
images[4] = "Floor3.jpg";
images[5] = "Floor4.jpg";
images[6] = "GeneticsLab.jpg";
images[7] = "Escape.jpg";
images[8] = "video-cameras.jpeg";
images[9] = "Elevator-Grid.jpg";
images[10] = "Military-genetics-results.jpg";
images[11] = "Military-weather-lab.jpg";
images[12] = "Military-servers.jpg";
images[13] = "Military-tracking-lab.png";

var mapLocation = 0;

var mapLocationIs;

var reloading;

var playersInput = "";

var commands = [];

var beenLeft1 = [];

var beenRight1 = [];

var knowAgents = [];

var hall = [];

var mapImage = 0;

var gridOn = [];

var inBuilding = [];

var beenLeft = [];

var beenRight = [];

var hasClimbed = [];

var ladderPlaced = [];

var insideInventory = [];

var action = "";

var gameMessage =
  "Hello Matt you can go right to the barn with r or left to the garage with l";
insideInventory[0] = "grapple";

var Sorry = document.querySelector("#Sorry");
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var gameMessageDiv = document.querySelector("#text");
var Inventory = document.querySelector("#Inventory");
var image = document.querySelector("img");

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", playGame);

render();

function playGame() {
  playersInput = input.value;
  playersInput = playersInput.toLowerCase();

  action = "";

  switch (playersInput) {
    case "r": {
      beenRight[0] = "yes";
      gameMessage = "You are in a barn get the ladder with pl or leave with b";
      mapImage = 0;
      break;
    }
    case "l": {
      beenLeft[0] = "yes";
      gameMessage = "You are in a garage leave with b";
      mapImage = 0;
      break;
    }
    case "b": {
      const hasLadder = insideInventory.find(inv => inv === "ladder");
      const hasLadderPlaced = ladderPlaced.find(wonder => wonder === "yes");
      mapImage = 0;
      {
        if (hasLadder === "ladder") {
          gameMessage =
            "Hello Matt you can go right to the barn with r or left to the garage with l or your new option of using your ladder to climb up the building with ladder";
          break;
        } else {
          if (hasLadderPlaced === "yes") {
            gameMessage =
              "Hello Matt you can go right to the barn with r or left to the garage with l or climb ladder with climb";
            break;
          } else {
          }
          gameMessage =
            "Hello Matt you can go right to the barn with r or left to the garage with l";
          break;
        }
      }
    }
    case "pl": {
      const canGetLadder = beenRight.find(right => right === "yes");
      if (canGetLadder) {
        mapImage = 0;
        insideInventory[1] = "ladder";
        gameMessage = "You got a ladder press b to go back";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }

    case "ladder": {
      const hasLadder = insideInventory.find(inv => inv === "ladder");
      if (hasLadder === "ladder") {
        ladderPlaced[0] = "yes";
        delete insideInventory[1];
        gameMessage = "Use climb to view options";
        mapImage = 0;
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "climb": {
      const hasLadderPlaced = ladderPlaced.find(wonder => wonder === "yes");
      if (hasLadderPlaced === "yes") {
        gameMessage =
          "You are on the roof sorry about that the first level is the top and yeah well its underground the first level looks like an abandon industrial building you can try the vent with vent or go back with b or you can search the building it may be for protecting the base it may have troops in there your choice you can go in with chance or your other option of grappling down throught a missing pannel in the skylight thats painted black and does not give off light go under the black cloth and grapple down with grapple";
        mapImage = 0;
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }

    case "chance": {
      const hasLadderPlaced = ladderPlaced.find(wonder => wonder === "yes");
      if (hasLadderPlaced) {
        insideInventory[1] = "goggles";
        mapImage = 0;
        gameMessage =
          "You can see in the industrial area if you can get down use climb to go back";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "grapple": {
      const hasLadderPlaced = ladderPlaced.find(wonder => wonder === "yes");
      if (hasLadderPlaced) {
        const hasG = insideInventory.find(gog => gog === "goggles");
        if (hasG === "goggles") {
          gameMessage =
            "You have seen in the dark you found the trapdoor type lobby for details";
          mapLocation = 1;
          mapLocationIs = 1;
          mapImage = 1;
          delete insideInventory[0];
          break;
        } else {
          gameMessage =
            "You are dead you had jumped in the dark you blindly get stabed by a pike of metal";
          reloading = setTimeout(reload, 10000);
          break;
        }
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "vent": {
      gameMessage =
        "Why are you going in a vent that locks you in, your found then your taken prisioner you never escape you live there for the rest of your life";
      reloading = setTimeout(reload, 10000);
      break;
    }
    case "lobby": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        localStorage.setItem("mapLocation", 1);
        gameMessage =
          "Well done you are now onto stage two of your mission get to the elevator and get onto the first floor because the building is fliiped upside down use lby for options and more info";
        delete insideInventory[1];
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "lby": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        gameMessage =
          "You see two agents near the elevator rack there is a down one elevator that is operational but the others are damaged for some reason you need to get the agents to move if you take to long agents will find you and put you in prison you can try to pass by with a uniform that is on the rack next to you with uni or try to go back into the hallway behind you with hall";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "uni": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        gameMessage = `"Well how are you YOU ARE SO DUMB THINK YOU CAN WALK BY AS ONE OF US YOUR A INTUDER" they grab you you are in prison and no one frees you`;
        reloading = setTimeout(reload, 10000);
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "hall": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        gameMessage =
          "You are smart the uniform probably would get you caught but you still need to walk down or enter the room to your left to walk further use forward or go into the room with door";
        hall[0] = "yes";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "forward": {
      const hallway = hall.find(walk => walk == "yes");
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        if (hallway === "yes") {
          gameMessage =
            "I dont know about you but i didnt feel good about that door but lets see we can go left or right or straight with strt for left use lf for right use rt";
          break;
        } else {
          console.log("cmd to soon");
          break;
        }
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "lf": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 8;
        gameMessage =
          "You are in a room with a comm to each agent and a video camera station use video for cameras or comm for the comm";
        beenLeft1[0] = "yes";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "rt": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 9;
        gameMessage =
          "You are in the elevator grid press the green button with green or the red button with red";
        beenRight1[0] = "yes";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "strt": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        gameMessage =
          "Man why do traps have to be so common you step on a part of the carpet and chains suround you, you are stuck in prison";
        reloading = setTimeout(reload, 10000);
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "comm": {
      const agentsKnown = knowAgents.find(gnt => gnt == "yes");
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 8;
        if (agentsKnown === "yes") {
          gameMessage =
            "There gone you can try to go throught the elevators with elev or go back to the hall with forward";
          break;
        } else {
          gameMessage =
            "You call over there comms you have a new mission to make a stakeout of the NSA's spy base and you lose you are locked up";
          reloading = setTimeout(reload, 10000);
          break;
        }
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "video": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 8;
        gameMessage =
          "The two agents are agent lightman and agent grant wait you think man am i am so lucky agent grant would recognise me use comm to tell them to go on a suitable mission";
        knowAgents[0] = "yes";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "elev": {
      const agentsKnown = knowAgents.find(gnt => gnt == "yes");
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 2;
        if (gridOn) {
          if (agentsKnown) {
            gameMessage = "You are now on level 3 type floor1 to see details";
            mapLocationIs = 2;
            mapLocation = 2;
            break;
          } else {
            gameMessage =
              "You forgot that there are agents there right now you have a bigger problem you are in prison";
            reloading = setTimeout(reload, 10000);
            break;
          }
        } else {
          if (agentsKnown) {
            gameMessage =
              "Dam elevators are off there are agents coming into the lobby";
            reloading = setTimeout(reload, 10000);
            break;
          } else {
            gameMessage = "Well i mean agents are there and your now in prison";
            reloading = setTimeout(reload, 10000);
            break;
          }
        }
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "red": {
      const beenRight1A = beenRight1.find(br1 => br1 === "yes");
      if (beenRight1A === "yes") {
        mapImage = 1;
        gameMessage =
          "Why would you press a red button wait thats right because green is a trap the elevator that isn't damaged is now online try the elevator with elev or go back to the hallway with forward";
        gridOn[0] = "yes";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "green": {
      const beenLeft1A = beenLeft1.find(bl1 => bl1 === "yes");
      if (beenLeft1A) {
        gameMessage =
          "Great job you pressed the green button wait what its a trap your in prison";
        reloading = setTimeout(reload, 10000);
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
    case "floor1": {
      if ((mapLocationIs = 2)) {
        mapLocation = 2;
        mapImage = 2;
        gameMessage =
          "You walk into a room you can use the hatch with hatch or the door labeled genetics testing with gt";
        break;
      } else {
        console.log("cmd to soon");
        break;
      }
    }
  }

  render();
}

function render() {
  output.innerHTML = map[mapLocation];
  image.src = "images/" + images[mapImage];

  gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
  Inventory.innerHTML = "<br><em>" + insideInventory + "</em>";
}

function reload() {
  location.reload();
}
