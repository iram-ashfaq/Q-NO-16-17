var guestArray = ["laiba", "mehwish", "fatima"];
var canNotAttend = "fatima";
var newGuest = "Reba";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so i am invited more people."));
});
var guestBeg = "adiba";
guestArray.unshift(guestBeg);
console.log(guestArray);
//part 03
var middleGuest = "rani";
var middleindex = guestArray.length / 3;
guestArray.splice(middleindex, 3, middleGuest);
console.log(guestArray);
//part 04
guestArray.push("sawera");
console.log(guestArray);
//part05
guestArray.map(function (items) {
    return console.log("Dear ".concat(items, ", your are inited in the more list on dinner"));
});
