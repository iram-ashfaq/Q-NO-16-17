let guestArray : string[] =["laiba" , "mehwish" , "fatima" ];
let canNotAttend : string = "fatima";

let newGuest : string = "Reba"
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray)

guestArray.map((items) =>
console.log(`Dear ${items}, I found a bigger dinner table so i am invited more people.`)
);
let guestBeg : string ="adiba"
guestArray.unshift(guestBeg);
console.log(guestArray)

//part 03
let middleGuest : string = "rani"
let middleindex = guestArray.length/3
guestArray.splice(middleindex,3,middleGuest)
console.log(guestArray)

//part 04
guestArray.push("sawera")
console.log(guestArray)

//part05
guestArray.map((items) =>
console.log (`Dear ${items}, your are inited in the more list on dinner`));
