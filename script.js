var names = new Array();
names[0] = "dil";
names[1] = "venkatesh";
names[2] = "john";
names[3] = "jayanth";
names[4] = "Joe";
names[5] = "pual";
names[6] = "Joy";
names[7] = "justin";
names[8] = "diesel";
names[9] = "virat";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}
