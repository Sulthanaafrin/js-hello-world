let engineIndicatorLight = "red Blinking";
let spaceSuitsOn = true;
let shuttleCabinready = true;
let crewStatus = spaceSuitsOn && shuttleCabinready;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }

 if (crewStatus) {
    console.log("Crew Ready");
 } else {
    console.log("Crew Not Ready");
 }


 if (computerStatusCode === 200) {
    console.log("Please Stand By. Computer is Rebooting");
 } else if (computerStatusCode === 400) {
console.log("Sucess! Computer Online")
 } else {
    console.log("ALERT: Computer Offline");
 }

 if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape Velocity Reached!");
 } else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot Maintain Orbit!");
 } else {
    console.log("Stable Speed");
 } 

 if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }

 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 } 

 let fuelLevel = 6000;
 let engineTemperature = 1200;

 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "redBlinking") {
    console.log("ENGINE FAILURE IMMINENT.");
} else if ( fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check Fuel Level. Engine Runnung Hot.");
} else if ( fuelLevel > 20000 && engineTemperature < 2500) {
    console.log("Full Tank. Engines Good.");
} else if ( fuelLevel > 10000 && engineTemperature < 2500) {
    console.log("Fuel Level Above 50%. Engine Good.");
}  else if (fuelLevel >= 5000 && engineTemperature < 2500) {
    console.log("Fuel Level Above 25%. Engine Good.");
} else { 
    console.log("Fuel and Engine Status Pending...");
} 


let commandOverRide = true;
if ( fuelLevel > 20000 && engineIndicatorlight !== "redBlinking" || commandOverRide) {
    console.log("Cleared to Launch");
 } else {
    console.log("Launch Scrubbed");
 }


