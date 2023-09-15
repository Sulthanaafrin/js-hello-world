let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

if (astronautCount < 7) {
    console.log("Astronaut Count no less than 7");
}
if (astronautStatus == "Ready") {
    console.log("Astronaut Status is Ready");
}
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass(kg) is less than 850000")
}
if ((fuelTempCelsius < minimumFuelTemp) || (fuelTempCelsius > minimumFuelTemp)){
    console.log("Fuel Temp Celsius is no less than (-300) or no greater than (-150)")
}
if (fuelLevel == "100%") { 
    console.log("Fuel Level is 100%");
}
if (weatherStatus == "clear") {
    console.log("Weather Status is clear");
} else {
    console.log("Space Shuttle is not ready to Launch")
}


console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log("Wish your astronauts a safe fight")

