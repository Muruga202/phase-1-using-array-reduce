const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable called totalBatteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // This will log the total number of batteries
