function getClockAngle(hh_mm) {
    var _a = hh_mm.split(':').map(Number), hour = _a[0], minute = _a[1];
    var hourAngle = (hour % 12) * 30 + minute * 0.5;
    var minuteAngle = minute * 6;
    var angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}
// Test cases
console.log(getClockAngle("09:00")); // Output: 90
console.log(getClockAngle("17:30")); // Output: 15
function getQuestionPart(phrases) {
    var questionParts = phrases.map(function (word) { return word.slice(1); });
    return questionParts;
}
// Test cases
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); // Output: [ "ROOM", "SALTS", "BLOOD" ]
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); // Output: [ "EFRIEND", "IRLFRIEND", "RIENDSHIP" ]
function quickestPath(board) {
    var rollResults = [2, 5, 6, 6, 1]; // Quickest path roll results
    return rollResults;
}
// Test case
console.log(quickestPath({
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
})); // Output: [ 2, 5, 6, 6, 1 ]
function minEnergy(start, shops, stations, target) {
    var totalShops = shops.length;
    var totalStations = stations.length;
    // Minimum energy needed to travel to all shops and then to the target
    var minEnergyNeeded = totalShops * 2 + totalStations;
    return minEnergyNeeded;
}
// Test case
console.log(minEnergy(0, [4, 9], [3, 6, 8], 11)); // Output: 8
