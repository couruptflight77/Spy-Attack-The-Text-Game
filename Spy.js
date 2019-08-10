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
map[8] = "";

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
images[12] = "Military-severs.jpg";
images[13] = "Military-tracking-lab.png";
images[14] = "Prision-hatch.jpg";
images[15] = "Hall.jpg";
images[16] = "Forward.jpg";
images[17] = "Barn.jpg";
images[18] = "Garage.jpg";
images[19] = "hallway.jpg";
images[20] = "Ladder.jpg";
images[21] = "Night-vision-googles.jpg";
images[22] = "Roof.jpg";
images[23] = "Spy.jpg";
images[24] = "Vent.jpg";
images[25] = "Elevator.jpg";
images[26] = "Door1.jpg";
images[27] = "Safes.jpg";
images[28] = "Stairs.jpg";
images[29] = "Axe.jpg";
images[30] = "AxeDoor.jpg";
images[31] = "Black.jpg";
images[32] = "server grid.png";
images[33] = "Untitled drawing.png";
images[34] = "Before-Armory.jpg";
images[35] = "Armory.jpg";
images[36] = "credits.gif";
images[36] = "Cafe.jpg";

var mapLocation = 8;

var reloading;
var begining;

localStorage.setItem("startOfGame", "beganGame");

var playersInput = "";

var commandNotFoundText = "";

var commands = [];

const pressed = [];
const secretCode = "hacker";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    localStorage.setItem("hackerHere", "quickHack");
  }
});

var startedGame = [];

var safe1Selected = [];
var safe2Selected = [];
var safe3Selected = [];
var safe4Selected = [];
var safe5Selected = [];
var safe6Selected = [];
var safe7Selected = [];
var safe8Selected = [];
var safe9Selected = [];
var safe10Selected = [];

var keyHere = [];

var geobyteFound = [];
var gegabytes = [];

var safeStairKey = [];
var safeAxe = [];
var safeArmband = [];
var safeVoiceChanger = [];
var safeUsb = [];

var safesdone = [];

var safeSelected = [];

var safeInventory = [];

var beenLeft1 = [];

var beenRight1 = [];

var knowAgents = [];

var hall = [];

var gtlab = [];

var mapImage = 36;

var gridOn = [];

var howManyKeys0 = [];
var howManyKeys1 = [];
var howManyKeys2 = [];
var howManyKeys3 = [];
var howManyKeys4 = [];

var inBuilding = [];

var beenLeft = [];

var beenRight = [];

var hasClimbed = [];

var ladderPlaced = [];

var insideInventory = [];

var action = "";

var gameMessage = "";

var output = document.querySelector("#output");
var input = document.querySelector("#input");
var gameMessageDiv = document.querySelector("#text");
var commandNotFound = document.querySelector("#cmdNtFound");
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
  commandNotFoundText = "";

  switch (playersInput) {
    case "begin": {
      mapLocation = 0;
      localStorage.removeItem("startOfGame");
      mapImage = 0;
      insideInventory[0] = "grapple";
      gameMessage =
        "Hello Matt you can go right to the barn with r or left to the garage with l";
      break;
    }
    case "r": {
      localStorage.setItem("beenRight", "right");
      gameMessage = "You are in a barn get the ladder with pl or leave with b";
      mapImage = 17;
      break;
    }
    case "l": {
      gameMessage = "You are in a garage leave with b";
      mapImage = 18;
      break;
    }
    case "b": {
      const hasLadder = localStorage.getItem("gotLadder");
      const hasLadderPlaced = localStorage.getItem("ladderPlaced");
      mapImage = 0;
      {
        if (hasLadder === "ladder") {
          gameMessage =
            "Hello Matt you can go right to the barn with r or left to the garage with l or your new option of using your ladder to climb up the building with ladder";
          break;
        } else {
          if (hasLadderPlaced === "placed") {
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
      const canGetLadder = localStorage.getItem("beenRight");
      if (canGetLadder === "right") {
        mapImage = 17;
        localStorage.setItem("gotLadder", "ladder");
        gameMessage = "You got a ladder use b to go back";
        break;
      } else {
        break;
      }
    }
    case "ladder": {
      const hasLadder = localStorage.getItem("gotLadder");
      if (hasLadder === "ladder") {
        localStorage.setItem("ladderPlaced", "placed");
        gameMessage = "Use climb to view options";
        mapImage = 20;
        break;
      } else {
        break;
      }
    }
    case "climb": {
      const hasLadderPlaced = localStorage.getItem("ladderPlaced");
      if (hasLadderPlaced === "placed") {
        gameMessage =
          "You are on the roof sorry about that the first level is the top and yeah well its underground the first level looks like an abandon industrial building you can try the vent with vent or go back with b or you can search the building it may be for protecting the base it may have troops in there your choice you can go in with chance or your other option of grappling down throught a missing pannel in the skylight thats painted black and does not give off light go under the black cloth and grapple down with grapple";
        mapImage = 22;
        break;
      } else {
        break;
      }
    }
    case "chance": {
      const hasLadderPlaced = localStorage.getItem("ladderPlaced");
      if (hasLadderPlaced === "placed") {
        localStorage.setItem("nightVision", "greenScreen");
        mapImage = 21;
        gameMessage =
          "You can see in the industrial area if you can get down use climb to go back";
        break;
      } else {
        break;
      }
    }
    case "grapple": {
      const hasLadderPlaced = localStorage.getItem("ladderPlaced");
      if (hasLadderPlaced === "placed") {
        const hasG = localStorage.getItem("nightVision");
        if (hasG === "greenScreen") {
          gameMessage =
            "You have seen in the dark you found the trapdoor type lobby for details";
          mapLocation = 1;
          mapImage = 1;
          localStorage.setItem("airmakers", "boeing");
          break;
        } else {
          gameMessage =
            "You are dead you had jumped in the dark you blindly get stabed by a pike of metal";
          mapImage = 31;
          reloading = setTimeout(reload, 10000);
          break;
        }
      } else {
        break;
      }
    }
    case "vent": {
      gameMessage =
        "Why are you going in a vent that locks you in, your found then your taken prisioner you never escape you live there for the rest of your life";
      reloading = setTimeout(reload, 10000);
      mapImage = 24;
      break;
    }
    case "lobby": {
      const inLobby = localStorage.getItem("airmakers");
      if (inLobby === "boeing") {
        mapLocation = 1;
        mapImage = 1;
        gameMessage =
          "Well done you are now onto stage two of your mission get to the elevator and get onto the first floor because the building is fliped upside down use lby for options and more info";
        localStorage.setItem("inLobby", "spyLobby");
        break;
      } else {
        break;
      }
    }
    case "lby": {
      const inLby = localStorage.getItem("airmakers");
      if (inLby === 1) {
        mapLocation = 1;
        mapImage = 1;
        gameMessage =
          "You see two agents near the elevator rack there is a down one elevator that is operational but the others are damaged for some reason you need to get the agents to move if you take to long agents will find you and put you in prison you can try to pass by with a uniform that is on the rack next to you with uni or try to go back into the hallway behind you with hall";
        break;
      } else {
        break;
      }
    }
    case "uni": {
      mapLocation = 1;
      mapImage = 23;
      gameMessage = `"Well how are you YOU ARE SO DUMB THINK YOU CAN WALK BY AS ONE OF US YOUR A INTUDER" they grab you you are in prison and no one frees you`;
      reloading = setTimeout(reload, 10000);
      break;
    }
    case "hall": {
      const inHall = localStorage.getItem("airmakers");
      if (inHall === "boeing") {
        mapLocation = 1;
        mapImage = 19;
        gameMessage =
          "You are smart the uniform probably would get you caught but you still need to walk down or enter the room to your left to walk further use forward or go into the room with door";
        localStorage.setItem("hall", "first");
        break;
      } else {
        break;
      }
    }
    case "forward": {
      const hallway = localStorage.getItem("hall");
      if (hallway === "first") {
        mapLocation = 1;
        mapImage = 16;
        localStorage.setItem("hall2", "second");
        localStorage.setItem("accessElev", "canElev");
        gameMessage =
          "I dont know about you but i didnt feel good about that door but lets see we can go left or right or straight with strt for left use lf for right use rt";
        break;
      } else {
        break;
      }
    }
    case "door": {
      gameMessage = "a door that has a gaurd in it that puts you in prison";
      reloading = setInterval(reload, 10000);
      break;
    }
    case "lf": {
      const hall2Yes = localStorage.getItem("hall2");
      if (hall2Yes === "second") {
        mapLocation = 1;
        mapImage = 8;
        gameMessage =
          "You are in a room with a comm to each agent and a video camera station use video for cameras or comm for the comm";
        localStorage.setItem("beenLeft1", "left1");
        break;
      } else {
        break;
      }
    }
    case "rt": {
      const hall2Yes = localStorage.getItem("hall2");
      if (hall2Yes === "second") {
        mapLocation = 1;
        mapImage = 9;
        localStorage.setItem("beenRight1", "Right1");
        gameMessage =
          "You are in the elevator grid press the green button with green or the red button with red";

        break;
      } else {
        break;
      }
    }
    case "strt": {
      mapLocation = 1;
      mapImage = 1;
      gameMessage =
        "Man why do traps have to be so common you step on a part of the carpet and chains suround you, you are stuck in prison";
      reloading = setTimeout(reload, 10000);
      break;
    }
    case "comm": {
      const agentsKnown = localStorage.getItem("agentId");
      const canComm = localStorage.getItem("beenLeft1");
      if (canComm === "left1") {
        mapLocation = 1;
        mapImage = 8;
        if (agentsKnown === "grant") {
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
        break;
      }
    }
    case "video": {
      const canVideo = localStorage.getItem("beenLeft1");
      if (canVideo === "left1") {
        mapLocation = 1;
        mapImage = 8;
        gameMessage =
          "The two agents are agent lightman and agent grant wait you think man am i am so lucky agent grant would recognise me use comm to tell them to go on a suitable mission";
        localStorage.setItem("agentId", "grant");
        break;
      } else {
        break;
      }
    }
    case "elev": {
      const canElev = localStorage.getItem("accessElev");
      const agentsKnown = localStorage.getItem("agentId");
      const gridOn = localStorage.getItem("elevatorActivated");
      if (canElev === "canElev") {
        mapLocation = 1;
        mapImage = 25;
        if (gridOn === "elevatorRed") {
          if (agentsKnown) {
            gameMessage = "You are now on level 3 type floor1 to see details";
            mapLocationIs = 2;
            mapLocation = 2;
            localStorage.setItem("airmakers1", "airbus");
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
        break;
      }
    }
    case "red": {
      const beenRight1A = localStorage.getItem("beenRight1");
      if (beenRight1A === "right1") {
        mapImage = 9;
        gameMessage =
          "Why would you press a red button wait thats right because green is a trap the elevator that isn't damaged is now online try the elevator with elev or go back to the hallway with forward";
        localStorage.setItem("elevatorActivated", "elevatorRed");
        break;
      } else {
        break;
      }
    }
    case "green": {
      const beenLeft1A = localStorage.getItem("beenRight1", "right1");
      if (beenLeft1A) {
        mapImage = 9;
        gameMessage =
          "Great job you pressed the green button wait what its a trap your in prison";
        reloading = setTimeout(reload, 10000);
        break;
      } else {
        break;
      }
    }
    case "floor1": {
      const canBeOnF1 = localStorage.getItem("airmakers1");
      if (canBeOnF1 === "airbus") {
        mapLocation = 2;
        mapImage = 2;
        gameMessage =
          "You walk into a room you can use the hatch with hatch or the door labeled genetics testing with gt";
        break;
      } else {
        break;
      }
    }
    case "gt": {
      const canBeOnF1a = localStorage.getItem("airmakers1");
      if (canBeOnF1a === "airbus") {
        gameMessage =
          "What is this there are computer monitors you can leave with floor1 or go throught the door labeled floor 1 with door1";
        localStorage.setItem("labHere", "labGt");
        mapImage = 10;
        break;
      } else {
        break;
      }
    }
    case "hatch": {
      if (mapLocationis === 2) {
        mapImage = 14;
        gameMessage =
          "Well i mean it is a good idea to go with the least likly to be true but it in this case is the wrong choice";
        reloading = setTimeout(reload, 10000);
        break;
      } else {
        break;
      }
    }
    case "floor2": {
      const hasSafeAxe = safeAxe.find(axe => axe === "yes");
      var axe = localStorage.getItem("safeInventoryHasAxe");
      var jc3 = localStorage.getItem("airmakers2");
      var doowr = localStorage.getItem("axeUsed");
      if (jc3 == "piper") {
        if (hasSafeAxe === "yes") {
          mapImage = 29;
          gameMessage = "use axe to chop the wood in front of you";
          break;
        } else {
          if (axe == "Axe") {
            mapImage = 29;
            gameMessage = "use axe to chop the wood in front of you";
            break;
          } else {
            if (doowr == "use") {
              mapImage = 29;
              gameMessage =
                "use axe to chop the wood in front of you sorry you have to do it again even thought you already did it last time you were on this";
              break;
            } else {
              gameMessage =
                "Dam it you need to go back to level 3 floor 1 you dont have the axe";
              localStorage.removeItem("airmakers2");
              reloading = setTimeout(reload, 10000);
              break;
            }
          }
        }
      } else {
        break;
      }
    }
    case "floor3": {
      const floor3Entering = localStorage.getItem("airmakers3");
      if (floor3Entering === "douglas") {
        gameMessage = "Well done now go into the cafe with cafe";
        localStorage.setItem("cafeInSight", "CoffeeAndMuffins");
        break;
      } else {
        break;
      }
    }
    case "floor4": {
      localStorage.setItem("airmakers", "sopwith");
    }
    case "floor5": {
      localStorage.setItem("airmakers", "scaled");
    }
    case "stealth": {
      localStorage.setItem("airmakers", "lockheed");
    }
    case "boeing": {
      var B747 = localStorage.getItem("airmakers");
      if (B747 == "boeing") {
        mapLocationIs = 1;
        gameMessage = "lobby";
        break;
      } else {
        break;
      }
    }
    case "airbus": {
      var A320 = localStorage.getItem("airmakers1");
      if (A320 == "airbus") {
        mapLocationIs = 2;
        gameMessage = "floor1";
        delete insideInventory[0];
        break;
      } else {
        break;
      }
    }
    case "piper": {
      var J3 = localStorage.getItem("airmakers2");
      if (J3 == "piper") {
        mapLocationIs = 3;
        gameMessage = "floor2";
        delete insideInventory[0];
        mapLocation = 3;
        break;
      } else {
        break;
      }
    }
    case "douglas": {
      var DC2 = localStorage.getItem("airmakers3");
      if (DC2 == "douglas") {
        mapLocationIs = 4;
        gameMessage = "floor3";
        delete insideInventory[0];
        break;
      } else {
        break;
      }
    }
    case "sopwith": {
      var Snipe = localStorage.getItem("airmakers4");
      if (Snipe == "sopwith") {
        mapLocationIs = 5;
        gameMessage = "floor4";
        delete insideInventory[0];
        break;
      } else {
        break;
      }
    }
    case "scaled": {
      var SpaceShip1 = localStorage.getItem("airmakers5");
      if (SpaceShip1 == "scaled") {
        mapLocationIs = 6;
        gameMessage = "floor5";
        delete insideInventory[0];
        break;
      } else {
        break;
      }
    }
    case "lockheed": {
      var NightHalk = localStorage.getItem("airmakers6");
      if (NightHalk == "lockheed") {
        mapLocationIs = 7;
        gameMessage = "escape";
        delete insideInventory[0];
        break;
      } else {
        break;
      }
    }
    case "door1": {
      const gtl = localStorage.getItem("labHere");
      if (gtl === "labGt") {
        gameMessage =
          "Well this is floor 1 it apears to be abandon but this level has no elevators down but there is stairs to the next level type doorinfo for more info";
        break;
      }
    }
    case "doorinfo": {
      const gtl = localStorage.getItem("labHere");
      if (gtl === "yes") {
        gameMessage =
          "you can go to the first door with dr1 or the other door with dr2";
        break;
      } else {
        break;
      }
    }
    case "dr1": {
      const gtl = localStorage.getItem("labHere");
      if (gtl === "yes") {
        gameMessage =
          "You walk down a walkway and find a massive hall lucky for you its not in progress go to dr2 with dr2";
        mapImage = 15;
        break;
      } else {
        break;
      }
    }
    case "dr2": {
      const gtl = localStorage.getItem("labHere");
      const safedone = safesdone.find(cfd => cfd === "yes");
      const StairKeyhas = safeStairKey.find(labsf => labsf === "yes");
      if (gtl === "yes") {
        if (safedone === "yes") {
          if (StairKeyhas === "yes") {
            gameMessage = "Wow how good are you, you can use skey";
            mapImage = "28";
            break;
          } else {
            gameMessage =
              "dam it you didnt get the Stair key try again USE THE CODE OR YOU MAY GET MAD";
            reloading = setTimeout(reload, 10000);
            break;
          }
        } else {
          mapImage = 27;
          gameMessage =
            "There are 10 safes and 5 keys man is this going to be hard to decide which i would chose use safe and then the number of the safe you chose like safe1. There are five items you must have or your progress will be stoped";
          howManyKeys0[0] = "1";
          howManyKeys1[0] = "1";
          howManyKeys2[0] = "1";
          howManyKeys3[0] = "1";
          howManyKeys4[0] = "1";
          safesdone[0] = "yes";
          break;
        }
      }
    }
    case "safe1": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      const firstSafeSelected = safe1Selected.find(sf1 => sf1 === "yes");
      if (firstSafeSelected === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "The safe is empty try again";
          delete howManyKeys0[0];
          safe1Selected[0] = "yes";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "The safe is empty try again";
            delete howManyKeys1[0];
            safe1Selected[0] = "yes";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "The safe is empty try again";
              delete howManyKeys2[0];
              safe1Selected[0] = "yes";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "The safe is empty try again";
                delete howManyKeys3[0];
                safe1Selected[0] = "yes";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "The safe is empty type dr2";
                  delete howManyKeys4[0];
                  safe1Selected[0] = "yes";
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe2": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      const secondSafeSelected = safe1Selected.find(sf2 => sf2 === "yes");
      if (secondSafeSelected === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "There is nothing try again";
          delete howManyKeys0[0];
          safe2Selected[0] = "yes";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "There is nothing try again";
            delete howManyKeys1[0];
            safe2Selected[0] = "yes";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "There is nothing try again";
              delete howManyKeys2[0];
              safe2Selected[0] = "yes";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "There is nothing try again";
                delete howManyKeys3[0];
                safe2Selected[0] = "yes";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "There is nothing type dr2";
                  delete howManyKeys4[0];
                  safe2Selected[0] = "yes";
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe3": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      const thirdSafeSelected = safe3Selected.find(sf3 => sf3 === "yes");
      if (thirdSafeSelected === "3") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "You found an armband you put it on have another turn";
          delete howManyKeys0[0];
          safe3Selected[0] = "yes";
          safeArmband[0] = "yes";
          localStorage.setItem("safeInventoryHasArmband", "Armband");
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage =
              "You found an armband you put it on have another turn";
            delete howManyKeys1[0];
            safe3Selected[0] = "yes";
            safeArmband[0] = "yes";
            localStorage.setItem("safeInventoryHasArmband", "Armband");
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage =
                "You found an armband you put it on have another turn";
              delete howManyKeys2[0];
              safe3Selected[0] = "yes";
              safeArmband[0] = "yes";
              localStorage.setItem("safeInventoryHasArmband", "Armband");
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage =
                  "You found an armband you put it on have another turn";
                delete howManyKeys3[0];
                safe3Selected[0] = "yes";
                safeArmband[0] = "yes";
                localStorage.setItem("safeInventoryHasArmband", "Armband");
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "You found an armband you put it on type dr2";
                  delete howManyKeys4[0];
                  safe3Selected[0] = "yes";
                  safeArmband[0] = "yes";
                  localStorage.setItem("safeInventoryHasArmband", "Armband");
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe4": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      const fourthSafeSelected = safe4Selected.find(sf4 => sf4 === "yes");
      if (fourthSafeSelected === "4") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "There is nothing try again";
          delete howManyKeys0[0];
          safe4Selected[0] = "yes";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "There is nothing try again";
            delete howManyKeys1[0];
            safeSelected[0] = "yes";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "There is nothing try again";
              delete howManyKeys2[0];
              safeSelected[0] = "yes";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "There is nothing try again";
                delete howManyKeys3[0];
                safeSelected[0] = "yes";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "There is nothing use dr2";
                  delete howManyKeys4[0];
                  safeSelected[0] = "yes";
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe5": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      if (safeSelected === "5") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "You find a voice changer have another turn";
          delete howManyKeys0[0];
          safe5Selected[0] = "yes";
          safeVoiceChanger[0] = "yes";
          localStorage.setItem("safeInventoryHasVoice", "Voice");
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "You find a voice changer have another turn";
            delete howManyKeys1[0];
            safe5Selected[0] = "yes";
            safeVoiceChanger[0] = "yes";
            localStorage.setItem("safeInventoryHasVoice", "Voice");
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "You find a voice changer have another turn";
              delete howManyKeys2[0];
              safe5Selected[0] = "yes";
              safeVoiceChanger[0] = "yes";
              localStorage.setItem("safeInventoryHasVoice", "Voice");
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "You find a voice changer have another turn";
                delete howManyKeys3[0];
                safe5Selected[0] = "yes";
                safeVoiceChanger[0] = "yes";
                localStorage.setItem("safeInventoryHasVoice", "Voice");
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "You find a voice changer use dr2";
                  delete howManyKeys4[0];
                  safe5Selected[0] = "yes";
                  safeVoiceChanger[0] = "yes";
                  localStorage.setItem("safeInventoryHasVoice", "Voice");
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe6": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      if (safeSelected === "6") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "You found an axe have another turn";
          delete howManyKeys0[0];
          safe6Selected[0] = "yes";
          safeAxe[0] = "yes";
          localStorage.setItem("safeInventoryHasAxe", "Axe");
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "You found an axe have another turn";
            delete howManyKeys1[0];
            safe6Selected[0] = "yes";
            safeAxe[0] = "yes";
            localStorage.setItem("safeInventoryHasAxe", "Axe");
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "You found an axe have another turn";
              delete howManyKeys2[0];
              safe6Selected[0] = "yes";
              safeAxe[0] = "yes";
              localStorage.setItem("safeInventoryHasAxe", "Axe");
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "You found an axe have another turn";
                delete howManyKeys3[0];
                safe6Selected[0] = "yes";
                localStorage.setItem("safeInventoryHasAxe", "Axe");
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "You found an axe use dr2";
                  delete howManyKeys4[0];
                  safe6Selected[0] = "yes";
                  safeAxe[0] = "yes";
                  localStorage.setItem("safeInventoryHasAxe", "Axe");
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe7": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      if (safeSelected === "7") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "There is nothing try again";
          delete howManyKeys0[0];
          safe7Selected[0] = "yes";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "There is nothing try again";
            delete howManyKeys1[0];
            safe7Selected[0] = "yes";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "There is nothing try again";
              delete howManyKeys2[0];
              safe7Selected[0] = "yes";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "There is nothing try again";
                delete howManyKeys3[0];
                safe7Selected[0] = "yes";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "There is nothing use dr2";
                  delete howManyKeys4[0];
                  safe7Selected[0] = "yes";
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe8": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      if (safeSelected === "8") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage =
            "You got the Stair key you can get into the stairs to floor2 have another go";
          delete howManyKeys0[0];
          safe8Selected[0] = "yes";
          safeStairKey[0] = "yes";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage =
              "You got the Stair key you can get into the stairs to floor2 have another go";
            delete howManyKeys1[0];
            safe8Selected[0] = "yes";
            safeStairKey[0] = "yes";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage =
                "You got the Stair key you can get into the stairs to floor2 have another go";
              delete howManyKeys2[0];
              safe8Selected[0] = "yes";
              safeStairKey[0] = "yes";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage =
                  "You got the Stair key you can get into the stairs to floor2 have another go";
                delete howManyKeys3[0];
                safe8Selected[0] = "yes";
                safeStairKey[0] = "yes";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage =
                    "You got the Stair key you can get into the stairs to floor2 use dr2 to get back";
                  delete howManyKeys4[0];
                  safe8Selected[0] = "yes";
                  safeStairKey[0] = "yes";
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe9": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      if (safeSelected === "9") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage =
            "You found a usb with 1 zetabyte wonder what i can use it for have another go";
          delete howManyKeys0[0];
          safe9Selected[0] = "yes";
          safeUsb[0] = "yes";
          localStorage.setItem("safeInventoryHasUsb", "Usb");
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage =
              "You found a usb with 1 zetabyte wonder what i can use it for have another go";
            delete howManyKeys1[0];
            safe9Selected[0] = "yes";
            safeUsb[0] = "yes";
            localStorage.setItem("safeInventoryHasUsb", "Usb");
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage =
                "You found a usb with 1 zetabyte wonder what i can use it for have another go";
              delete howManyKeys2[0];
              safe9Selected[0] = "yes";
              safeUsb[0] = "yes";
              localStorage.setItem("safeInventoryHasUsb", "Usb");
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage =
                  "You found a usb with 1 zetabyte wonder what i can use it for have another go";
                delete howManyKeys3[0];
                safe9Selected[0] = "yes";
                safeUsb[0] = "yes";
                localStorage.setItem("safeInventoryHasUsb", "Usb");
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage =
                    "You found a usb with 1 zetabyte wonder what i can use it for go back with dr2";
                  delete howManyKeys4[0];
                  safe9Selected[0] = "yes";
                  safeUsb[0] = "yes";
                  localStorage.setItem("safeInventoryHasUsb", "Usb");
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "safe10": {
      const howManyKeysIn0 = howManyKeys0.find(ky1 => ky1 === "1");
      const howManyKeysIn1 = howManyKeys1.find(ky2 => ky2 === "1");
      const howManyKeysIn2 = howManyKeys2.find(ky3 => ky3 === "1");
      const howManyKeysIn3 = howManyKeys3.find(ky4 => ky4 === "1");
      const howManyKeysIn4 = howManyKeys4.find(ky5 => ky5 === "1");
      if (safeSelected === "10") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "There is nothing try again";
          delete howManyKeys0[0];
          safe10Selected[0] = "yes";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "There is nothing try again";
            delete howManyKeys1[0];
            safe10Selected[0] = "yes";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "There is nothing try again";
              delete howManyKeys2[0];
              safe10Selected[0] = "yes";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "There is nothing try again";
                delete howManyKeys3[0];
                safe10Selected[0] = "yes";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "There is nothing use dr2";
                  delete howManyKeys4[0];
                  safe10Selected[0] = "yes";
                  break;
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
    case "skey": {
      const StairKeyhas = safeStairKey.find(labsf => labsf === "yes");
      if (StairKeyhas === "yes") {
        gameMessage = "Nice job you are finally on level 4 floor 2 use floor2";
        localStorage.setItem("airmakers2", "piper");
        mapImage = 28;
        break;
      } else {
        break;
      }
    }
    case "axe": {
      gameMessage =
        "Yes the wood is removed you put the wood in the corner use wdr";
      mapImage = 30;
      localStorage.removeItem("safeInventoryHasAxe");
      localStorage.setItem("axeUsed", "use");
      break;
    }
    case "wdr": {
      var wdr1 = localStorage.getItem("airmakers2");
      if (wdr1 == "piper") {
        mapImage = 13;
        gameMessage =
          "You are in a military tracking lab there are screens everywhere if you want to remove the data use dtr or go to the next room with ntr";
        break;
      } else {
        break;
      }
    }
    case "ntr": {
      mapImage = 11;
      gameMessage =
        "Well there's something less unsettling the military has been hacking every satellite in orbit of earth to get an exact map of the weather with an AI system as a weather scientist delete all the data with dtar or walk into the room thet you just left use pvr or the next room with nxtr";
      break;
    }
    case "nxtr": {
      mapImage = 12;
      gameMessage =
        "well this is a very strange sight a huge area you check the small screen this is extremly unsettiling they need a grid of 100 by 100 super servers what the hell is going on you check the screen and you tap your armband to it what there is 1 geobyte it shouldn't be possible that much data would require servers that would cover earth 23,000,000 times for more info use geobyte";
      localStorage.setItem("geobyte", "geoFound");
      break;
    }
    case "geobyte": {
      var tenGeobytes = geobyteFound.find(geo => geo === "yes");
      if (tenGeobytes === "yes") {
        gameMessage =
          "Well somehow it requires a 2 brontobytes for the two systems in the rooms that you were just in it is one hundredth of the maximum you realise that the data is backed up twice because the info on the armband has tracing 3 brontobytes and weather 3 brontobytes i realised that this means that the systems recover quickly enough that every second the bytes that had been deleted so you would have to delete them all but that would take thirty times longer for options use geobytes-";
        break;
      } else {
        break;
      }
    }
    case "geobytes-": {
      var tenGeobytes = localStorage.getItem("geobyte");
      if (tenGeobytes === "geoFound") {
        gameMessage =
          "you can try to break the wires with cut or go throught door using drt";
        localStorage.setItem("gegabyte", "gegaFound");
        break;
      } else {
        break;
      }
    }
    case "cut": {
      const gegabytes10 = localStorage.getItem("gegabyte");
      if (gegabytes10 === "gegaFound") {
        gameMessage =
          "Well i mean of course we need to show you the wire grid with grid";
        break;
      } else {
        break;
      }
    }
    case "drt": {
      const gegabytes10 = localStorage.getItem("gegabyte");
      if (gegabytes10 === "gegaFound") {
        mapImage = 34;
        localStorage.setItem("gegahall", "yes");
        gameMessage =
          "What is this an armory well about time you can go throught the first door with armor of the next door with battle did i tell you that there is a battle arena throught the next door it leads down to the next floor";
        break;
      } else {
        break;
      }
    }
    case "grid": {
      mapImage = 32;
      gameMessage =
        "this has a ten by ten grid patern try to cut it one after the after you cant sorry as you cut a fake wire the gaurds come";
      reloading = setTimeout(10000, reload);
      break;
    }
    case "armor": {
      const gegabytes10 = localStorage.getItem("gegahall");
      if (gegabytes10 === "yes") {
        mapImage = 35;
        gameMessage =
          "well if you want to gear up use gear it will make you a lot more noticable but less likely to be attacked and also less likely to be hit leave with drt or gear with gear";
        break;
      } else {
        break;
      }
    }
    case "gear": {
      const gegabytes10 = localStorage.getItem("gegahall");
      if (gegabytes10 === "yes") {
        mapImage = 35;
        gameMessage =
          "well this is the biggest armory in existance this is one small area of it we must have a hand gun we also need some super thin bullet proof armor we also need my own invention when i worked there yes i did work there until i was hired it stops tranquilizer from doing anything but reverse it's efects by keeping it in you'r blood stream with a spin that is so fast blood is pumped much quicker use drt";
        localStorage.setItem("geared", "has gear");
        break;
      } else {
        break;
      }
    }
    case "battle": {
      const attacking = localStorage.getItem("geared");
      const gegabytes10 = localStorage.getItem("gegahall");
      if (gegabytes10 === "yes") {
        if (attacking === "has gear") {
          gameMessage =
            "well you'r smart it actully had battle on the door because there is an attack keep shooting use shoot";
          localStorage.setItem("shooting", "yes");
          break;
        } else {
          gameMessage =
            "well you'r going into a battle without armor your taken out you are stunned the agents come to get you to help you relise your an enemy lock you up sorry";
          break;
        }
      } else {
        break;
      }
    }
    case "shoot": {
      const gegabytes10 = localStorage.getItem("gegahall");
      const shotdead = localStorage.getItem("shooting");
      if (gegabytes10 === "yes") {
        if (shotdead === "yes") {
          mapImage = 33;
          gameMessage = "use the letters that are there";
          localStorage.setItem("hasShot", "shootToKill");
          break;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    case "z": {
      const shotToKillz = localStorage.getItem("hasShot");
      if (shotToKillz === "shootToKill") {
        gameMessage =
          "well 26 must be your lucky number coming back for revenge you got hit";
        reloading = setInterval(10000, reload);
        break;
      } else {
        break;
      }
    }
    case "y": {
      const shotToKilly = localStorage.getItem("hasShot");
      if (shotToKilly === "shootToKill") {
        gameMessage =
          "well 25 must be your unlucky number coming back to reward you, you can get into the stairs with yest";
        localStorage.setItem("gst", "yst");
        break;
      } else {
        break;
      }
    }
    case "x": {
      const shotToKillx = localStorage.getItem("hasShot");
      if (shotToKillx === "shootToKill") {
        gameMessage =
          "well 24 must be your lucky number coming back to haunt you i mean taking cover is a good idea but lowground isnt the best choice your hit";
        reloading = setInterval(10000, reload);
        break;
      } else {
        break;
      }
    }
    case "w": {
      const shotToKillw = localStorage.getItem("hasShot");
      if (shotToKillw === "shootToKill") {
        gameMessage =
          "well 23 must be your lucky number coming back to haunt you, you are in the open yoou get hit";
        reloading = setInterval(10000, reload);
        break;
      } else {
        break;
      }
    }
    case "v": {
      const shotToKillv = localStorage.getItem("hasShot");
      if (shotToKillv === "shootToKill") {
        gameMessage =
          "well 23 must be your lucky number coming back to haunt you, i mean the position near the stairs is good but over the valley you are hit";
        reloading = setInterval(10000, reload);
        break;
      } else {
        break;
      }
    }
    case "yest": {
      const yUsed = localStorage.getItem("gst");
      if (yUsed === "yst") {
        gameMessage = "well done use floor3";
        mapImage = 4;
        localStorage.setItem("airmakers", "douglas");
        break;
      } else {
        break;
      }
    }
    case "cafe": {
      const findCafe = localStorage.getItem("cafeInSight");
      if (findCafe === "CoffeeAndMuffins") {
        gameMessage = "";
        break;
      } else {
        break;
      }
    }
    case "quickhack": {
      const localHack = localStorage.getItem("hackerHere");
      if (localHack === "quickHack") {
        localStorage.clear();
        localStorage.setItem("airmakers", "boeing");
        localStorage.setItem("inLobby", "spyLobby");
        localStorage.setItem("beenRight", "right");
        localStorage.setItem("gotLadder", "ladder");
        localStorage.setItem("ladderPlaced", "placed");
        localStorage.setItem("hall", "first");
        localStorage.setItem("hall2", "second");
        localStorage.setItem("beenLeft1", "left1");
        localStorage.setItem("beenRight1", "right1");
        localStorage.setItem("agentId", "grant");
        localStorage.setItem("accesElev", "canElev");
        localStorage.setItem("airmakers1", "airbus");
        localStorage.setItem("labHere", "labGt");
        localStorage.setItem("safeInventoryHasArmband", "Armband");
        localStorage.setItem("safeInventoryHasVoice", "Voice");
        localStorage.setItem("safeInventoryHasUsb", "Usb");
        localStorage.setItem("airmakers2", "piper");
        localStorage.setItem("axeUsed", "use");
        localStorage.setItem("geobyte", "geoFound");
        localStorage.setItem("gegabyte", "gegaFound");
        localStorage.setItem("gegahall", "yes");
        localStorage.setItem("hasShot", "shootToKill");
        localStorage.setItem("geared", "has gear");
        localStorage.setItem("gst", "yst");
        localStorage.setItem("airmakers3", "douglas");
        localStorage.setItem("cafeInSight", "CoffeeAndMuffins");
        break;
      } else {
        break;
      }
    }

    default:
      commandNotFoundText = `${playersInput}, command not found`;
  }
  render();
}
function render() {
  localStorage.removeItem("hackerHere");
  const startOf = localStorage.getItem("startOfGame");
  const gameCreditsOver = startedGame.find(yee => yee, "yes");
  if (gameCreditsOver === "yes") {
  } else {
    if (startOf === "beganGame") {
      begining = setInterval(beginGame, 15000);
      startedGame[0] = "yes";
    } else {
    }
  }
  output.innerHTML = map[mapLocation];
  image.src = "images/" + images[mapImage];

  gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
  Inventory.innerHTML = "<br><em>" + insideInventory + "</em>";
  commandNotFound.innerHTML = "<br><em>" + commandNotFoundText + "</em>";
}

function reload() {
  location.reload();
}
var alreadyBegan = [];
function beginGame() {
  const beginGameTriggered = alreadyBegan.find(beg => beg, "yes");
  if (beginGameTriggered === "yes") {
  } else {
    alreadyBegan[0] = "yes";
    gameMessage = "use begin to start game";
    render();
  }
}
