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
images[14] = "Prision-hatch.jpg";
images[15] = "starting screen.gif";
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

var mapLocation = 0;

var mapLocationIs;

var reloading;

var playersInput = "";

var commands = [];

var keyHere = [];

var beenLeft1 = [];

var beenRight1 = [];

var knowAgents = [];

var hall = [];

var gtlab = [];

var mapImage = 0;

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
      mapImage = 17;
      break;
    }
    case "l": {
      beenLeft[0] = "yes";
      gameMessage = "You are in a garage leave with b";
      mapImage = 18;
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
        mapImage = 17;
        insideInventory[1] = "ladder";
        gameMessage = "You got a ladder press b to go back";
        break;
      } else {
        break;
      }
    }
    case "ladder": {
      const hasLadder = insideInventory.find(inv => inv === "ladder");
      if (hasLadder === "ladder") {
        ladderPlaced[0] = "yes";
        delete insideInventory[1];
        gameMessage = "Use climb to view options";
        mapImage = 20;
        break;
      } else {
        break;
      }
    }
    case "climb": {
      const hasLadderPlaced = ladderPlaced.find(wonder => wonder === "yes");
      if (hasLadderPlaced === "yes") {
        gameMessage =
          "You are on the roof sorry about that the first level is the top and yeah well its underground the first level looks like an abandon industrial building you can try the vent with vent or go back with b or you can search the building it may be for protecting the base it may have troops in there your choice you can go in with chance or your other option of grappling down throught a missing pannel in the skylight thats painted black and does not give off light go under the black cloth and grapple down with grapple";
        mapImage = 22;
        break;
      } else {
        break;
      }
    }
    case "chance": {
      const hasLadderPlaced = ladderPlaced.find(wonder => wonder === "yes");
      if (hasLadderPlaced) {
        insideInventory[1] = "goggles";
        mapImage = 21;
        gameMessage =
          "You can see in the industrial area if you can get down use climb to go back";
        break;
      } else {
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
          delete insideInventory[1];
          localStorage.setItem("airmakers", "boeing");
          break;
        } else {
          gameMessage =
            "You are dead you had jumped in the dark you blindly get stabed by a pike of metal";
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
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 1;
        gameMessage =
          "Well done you are now onto stage two of your mission get to the elevator and get onto the first floor because the building is fliiped upside down use lby for options and more info";
        delete insideInventory[0];
        break;
      } else {
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
        break;
      }
    }
    case "uni": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 23;
        gameMessage = `"Well how are you YOU ARE SO DUMB THINK YOU CAN WALK BY AS ONE OF US YOUR A INTUDER" they grab you you are in prison and no one frees you`;
        reloading = setTimeout(reload, 10000);
      } else {
        break;
      }
    }
    case "hall": {
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 19;
        gameMessage =
          "You are smart the uniform probably would get you caught but you still need to walk down or enter the room to your left to walk further use forward or go into the room with door";
        hall[0] = "yes";
        break;
      } else {
        break;
      }
    }
    case "forward": {
      const hallway = hall.find(walk => walk == "yes");
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 16;
        if (hallway === "yes") {
          gameMessage =
            "I dont know about you but i didnt feel good about that door but lets see we can go left or right or straight with strt for left use lf for right use rt";
          break;
        } else {
          break;
        }
      } else {
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
        break;
      }
    }
    case "elev": {
      const agentsKnown = knowAgents.find(gnt => gnt == "yes");
      if (mapLocationIs === 1) {
        mapLocation = 1;
        mapImage = 25;
        if (gridOn) {
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
      const beenRight1A = beenRight1.find(br1 => br1 === "yes");
      if (beenRight1A === "yes") {
        mapImage = 9;
        gameMessage =
          "Why would you press a red button wait thats right because green is a trap the elevator that isn't damaged is now online try the elevator with elev or go back to the hallway with forward";
        gridOn[0] = "yes";
        break;
      } else {
        break;
      }
    }
    case "green": {
      const beenLeft1A = beenLeft1.find(bl1 => bl1 === "yes");
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
      if ((mapLocationIs = 2)) {
        mapLocation = 2;
        mapImage = 2;
        gameMessage =
          "You walk into a room you can use the hatch with hatch or the door labeled genetics testing with gt";
        delete keyHere[0];
        break;
      } else {
        break;
      }
    }
    case "gt": {
      if (mapLocationIs === 2) {
        gameMessage =
          "What is this there are computer monitors you can leave with floor1 or go throught the door labeled floor 1 with door1";
        gtlab[0] = "yes";
        keyHere[0] = "yes";
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
      if (mapLoationIs === 2) {
        localStorage.setItem("airmakers", "piper");
        break;
      } else {
      }
    }
    case "floor3": {
      localStorage.setItem("airmakers", "douglas");
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
        break;
      } else {
        break;
      }
    }
    case "door1": {
      const gtl = gtlab.find(lab => lab === "yes");
      if (mapLocationIs === 2) {
        if (gtl === "yes") {
          gameMessage =
            "Well this is floor 1 it apears to be abandon but this level has no elevators down but there is stairs to the next level type doorinfo for more info";
        } else {
          break;
        }
        break;
      }
    }
    case "doorinfo": {
      const gtl = gtlab.find(lab => lab === "yes");
      if (mapLocationIs === 2) {
        if (gtl === "yes") {
          gameMessage =
            "you can go to the first door with dr1 or the other door with dr2";
          break;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    case "dr1": {
      const gtl = gtlab.find(lab => lab === "yes");
      if (gtl === "yes") {
        gameMessage =
          "You walk down a walkway and find a massive hall lucky for you its not in progress go to dr2 with dr2";
        break;
      } else {
        break;
      }
    }
    case "dr2": {
      const gtl = gtlab.find(lab1 => lab1 === "yes");
      const safedone = safesdone.find(cfd => cfd === "yes");
      const safeInventoryhas = safeInventory.find(
        labsf => labsf === "StairKey"
      );
      if (gtl === "yes") {
        if (safedone === "yes") {
          if (safeInventoryhas === "StairKey") {
            gameMessage = "";
            break;
          } else {
            gameMessage =
              "dam it you didnt get the Stair key try again USE THE CODE OR YOU MAY GET MAD";
            reloading = setTimeout(reload, 10000);
            break;
          }
        } else {
          gameMessage =
            "There are 10 safes and 5 keys man is this going to be hard to decide which i would chose use safe and then the number of the safe you chose like safe1";
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
      const safeChosen1 = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen1 === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "The safe is empty try again";
          delete howManyKeys0[0];
          safeSelected[0] = "1";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "The safe is empty try again";
            delete howManyKeys1[0];
            safeSelected[0] = "1";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "The safe is empty try again";
              delete howManyKeys2[0];
              safeSelected[0] = "1";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "The safe is empty try again";
                delete howManyKeys3[0];
                safeSelected[0] = "1";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "The safe is empty use dr2 to go back";
                  delete howManyKeys4[0];
                  safeSelected[0] = "1";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "2");
      if (safeChosen === "2") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "2";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "2";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "2";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "2";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "2";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "3") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "3";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "3";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "3";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "3";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "3";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "4") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "4";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "4";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "4";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "4";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "4";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "5";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "5";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "5";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "5";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "5";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "6";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "6";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "6";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "6";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "6";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "7";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "7";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "7";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "7";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "7";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage =
            "You got the Stair key you can get into the stairs to floor2 have another go";
          delete howManyKeys0[0];
          safeSelected[0] = "8";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage =
              "You got the Stair key you can get into the stairs to floor2 have another go";
            delete howManyKeys1[0];
            safeSelected[0] = "8";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage =
                "You got the Stair key you can get into the stairs to floor2 have another go";
              delete howManyKeys2[0];
              safeSelected[0] = "8";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage =
                  "You got the Stair key you can get into the stairs to floor2 have another go";
                delete howManyKeys3[0];
                safeSelected[0] = "8";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage =
                    "You got the Stair key you can get into the stairs to floor2 use dr2 to get back";
                  delete howManyKeys4[0];
                  safeSelected[0] = "8";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage =
            "You found a usb with 1 zetabyte wonder what i can use it for have another go";
          delete howManyKeys0[0];
          safeSelected[0] = "9";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage =
              "You found a usb with 1 zetabyte wonder what i can use it for have another go";
            delete howManyKeys1[0];
            safeSelected[0] = "9";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage =
                "You found a usb with 1 zetabyte wonder what i can use it for have another go";
              delete howManyKeys2[0];
              safeSelected[0] = "9";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage =
                  "You found a usb with 1 zetabyte wonder what i can use it for have another go";
                delete howManyKeys3[0];
                safeSelected[0] = "9";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage =
                    "You found a usb with 1 zetabyte wonder what i can use it for go back with dr2";
                  delete howManyKeys4[0];
                  safeSelected[0] = "9";
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
      const safeChosen = safeSelected.find(sf1 => sf1 === "1");
      if (safeChosen === "yes") {
        break;
      } else {
        if (howManyKeysIn0 === "1") {
          gameMessage = "";
          delete howManyKeys0[0];
          safeSelected[0] = "10";
          break;
        } else {
          if (howManyKeysIn1 === "1") {
            gameMessage = "";
            delete howManyKeys1[0];
            safeSelected[0] = "10";
            break;
          } else {
            if (howManyKeysIn2 === "1") {
              gameMessage = "";
              delete howManyKeys2[0];
              safeSelected[0] = "10";
              break;
            } else {
              if (howManyKeysIn3 === "1") {
                gameMessage = "";
                delete howManyKeys3[0];
                safeSelected[0] = "10";
                break;
              } else {
                if (howManyKeysIn4 === "1") {
                  gameMessage = "";
                  delete howManyKeys4[0];
                  safeSelected[0] = "10";
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
