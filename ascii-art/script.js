// Part I: ASCII Art Square:
const emoji = "💯";

for (let i = 0; i < 10; i++){
    console.log(emoji.repeat(10));
}

// Part II: ASCII Art Triangle:
const triangle = "🔼";
const down = "V";


for (let triangle = "🔼"; triangle.length < 18; triangle += "🔼") {
    console.log(triangle);
    // console.log(triangle.length)
}

for (let i = 8; i > 0; i--) {
    console.log(down.repeat(i));
}

// Part III: ASCII Art Pyramid:
// Create a pyramid using the "^" character that starts with one in the center
// on the top and 11 on the bottom row
let column = "";

for(let i = 0; i <= 11; i+=2) {
    if (i === 0) {
        column += "^";
        console.log(column.padStart(6));
        // console.log(column);
    } else if (i === 2) {
        column += "^^";
        console.log(column.padStart(7))
        // console.log("---")
    } else if (i === 4) {
        column += "^^";
        console.log(column.padStart(8))
    } else if (i === 6) {
        column += "^^";
        console.log(column.padStart(9))
    } else if (i === 8) {
        column += "^^";
        console.log(column.padStart(10))
    } else if (i === 10) {
        // console.log("---")
        column += "^^";
        console.log(column)
    }
}

let tornado = "WWWWWWW"
for (let i = 7; i > 0; i-= 2) {
    if (i === 7) {
        console.log(tornado);
    } else if (i === 5) {
        sliced = tornado.slice(0, -2);
        console.log(sliced.padStart(6));
    } else if (i === 3) {
        sliced = tornado.slice(2, -1);
        console.log(sliced.padStart(5));
    } else if (i === 1) {
        sliced = tornado.slice(3, -3);
        console.log(sliced.padStart(4));
    }
}

//Part IV: Calendar:
const DAYS_IN_MONTH = 31;
const DAYS_IN_WEEK = 7;
let date = "";
let week = "";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// function printCalendar() {
//     console.log(daysOfWeek.toString());
//     day = daysOfWeek.toString();
//     console.log(day.replaceAll(",", " "));

//     for(i = 0; i <= DAYS_IN_MONTH; i++) {
//         if (num <= 0) {
//             console.log("we're here");
//             num++;
//             console.log(num);
//             } else if (num > 0 && num < DAYS_IN_MONTH) {
//                 num++;
//                 console.log(num);
//                 console.log("are we here?")
//                 for (let day = num; day < DAYS_IN_WEEK; day += num) {
//                     console.log(day);
//                     console.log("how'd we do?")
//                 }
//             }
//         }
//         console.log(`final ${num}`);
// }

function printCalendar() {
    day = daysOfWeek.toString();
    console.log(day.replaceAll(",", " "));
    
    for(let i = 1; i <= DAYS_IN_WEEK; i++) {
        let num = i;
        date += num + " ";
    }

    for (let j = 0; j<= DAYS_IN_MONTH; j++) {
        let temp = j;
        week += temp;
    }
    
    console.log(date,week);
}

printCalendar();