
// Task 1
function checkAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
checkAge(20); // You are eligible to vote.
checkAge(16); // You are not eligible to vote.

// Task 2
function getDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.");
    }
}
getDay(1); // Monday
getDay(5); // Friday
getDay(8); // Invalid day number.

// Task 3
const names = ["Ichraf", "Youssef", "Ziad", "Ahmed", "Ibrahim"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Task 4
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

// Task 5
function findEvenNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
findEvenNumbers(0, 20);
