let raceNumber = Math.floor(Math.random() * 1000);

let isRunnerEarly = false;
let runnerAge = 18;

if (isRunnerEarly && runnerAge > 18) {
    raceNumber += 1000;
}

if (isRunnerEarly && runnerAge > 18) {
    console.log(`${raceNumber} will race at 9:30am`);
} else if (!isRunnerEarly && runnerAge > 18) {
    console.log(`${raceNumber} will race at 11:00am`);
} else if (runnerAge < 18) {
    console.log(`${raceNumber} will race at 12:30pm`);
} else {
    console.log("Please check the registration desk!")
}
