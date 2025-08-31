// Code for switching schedules day wise:
// START ---
let day_border = document.querySelectorAll(".day-border");
let schedule_table = document.querySelectorAll(".schedule-table");
let topSection = document.querySelectorAll('.top-section');
let middleSection = document.querySelectorAll('.middle-section');
let toggleSection = document.querySelectorAll('.toggler');
function changeVarIndices() {
    if (screen.width <= 850) {
        console.log("small screen")
        topSection = topSection[0];
        middleSection = middleSection[0];
        toggleSection = toggleSection[0];
    } else {
        console.log("big screen")
        topSection = topSection[1];
        middleSection = middleSection[1];
        toggleSection = toggleSection[1];
    }
}
window.onresize = changeVarIndices();

function removeActiveTables(num) {
    // function to remove visibility of active tables nad also active indicator for day tabs
    if (num >= 3) num -= 3;
    else num += 3;
    for (let i = 0; i < day_border.length; i++) {
        if (i != num) {
            day_border[i].classList.remove('active');
            schedule_table[i].classList.remove('visible');
        }
    }
}

function addActiveTables(num) {
    // function to make currently clicked day tab's respective schedules visible
    let i = num;
    if (num >= 3) i -= 3;
    else i += 3;
    day_border[i].classList.add('active');
    schedule_table[i].classList.add('visible');
    day_border[num].classList.add('active');
    schedule_table[num].classList.add('visible');

    // For mobile mode: code below is to make the schedule event cards visible
    if (num >= 3) num -= 3;
    let scheduleCard = document.querySelectorAll('.schedule-' + (num + 1) + ' .event-wrapper');
    for (let j = 0; j < scheduleCard.length; j++) {
        scheduleCard[j].classList.remove('infinite-pos');
    }
}

let dates = document.querySelectorAll('.date-desktop');
function changeDate(num) {
    // function to change date visibility in desktop mode
    if (num >= 3) num -= 3;
    // console.log(dates);
    dates[num].classList.add('visible');
    for (let i = 0; i < dates.length; i++) {
        if (i !== num)
            dates[i].classList.remove('visible');
    }
}

function changeDay(dayNumber) {
    // function to change day tabs for viewing schedules of each day
    let scheduleCardAll = document.querySelectorAll('.event-wrapper');
    for (let j = 0; j < scheduleCardAll.length; j++) {
        scheduleCardAll[j].classList.add('infinite-pos');
    }
    if (toggleSection.style.position === "fixed") {
        topSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    removeActiveTables(dayNumber);
    addActiveTables(dayNumber);
    changeDate(dayNumber);
}
//  --- END

// Code for making toggler section fixed when scrolled down further:
// START ---
// let scheduleSection = document.querySelectorAll('#schedule');

window.addEventListener('scroll', function () {
    let togglerPositionFromTop = toggleSection.getBoundingClientRect();
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    console.log(togglerPositionFromTop)
    if (currentScrollPos > 200) {
        toggleSection.style.position = "fixed";
        toggleSection.style.bottom = "15px";
        toggleSection.style.backdropFilter = "blur(10px)";
        toggleSection.style.background = "rgba(255, 255, 255, 0.5)";
        toggleSection.style.borderColor = "#504408";
        toggleSection.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
        middleSection.style.paddingTop = "60px";
    }
    else {
        toggleSection.style.position = "relative";
        toggleSection.style.bottom = "none";
        toggleSection.style.backdropFilter = "blur(0)";
        toggleSection.style.background = "transparent";
        toggleSection.style.borderColor = "transparent";
        toggleSection.style.boxShadow = "0 0 0";
        middleSection.style.paddingTop = "0";
    }
})
// --- END

// Code for highlighting ongoing and completed event(s) in real time:
// START ---
let date1 = "2-2-2024";
let date2 = "3-2-2024";
let date3 = "4-2-2024";

const currentDate = new Date();
const current_DD = currentDate.getDate();
const current_MM = currentDate.getMonth() + 1;
const current_YY = currentDate.getFullYear();
const date = current_DD + "-" + current_MM + "-" + current_YY;
console.log(date);

const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentTime = currentHours + ":" + currentMinutes;
console.log(currentTime);

let eventTimings = document.querySelectorAll('.time');
const extractedTime = []; // array of size 2; at index-0: starting time, index-1: ending time/no time;
function extractTime(time) {
    // function to extract time from schedules and store them in extractTime[] array;
}

let eventWrapper = document.querySelectorAll('.event-wrapper');
let eventDetails = document.querySelectorAll('.event-details');
let eventName = document.querySelectorAll('.event-name-desktop');
let eventNumber = document.querySelectorAll('.event-number');
let time_venue_Wrapper = document.querySelectorAll('.time-venue-wrapper');

function completed(i) {
    eventNumber[i].style.color = "#bfb9a9";
    eventDetails[i].style.borderImage = "linear-gradient(transparent, #bfb9a9, transparent) 1"
    eventWrapper[i].style.background = "linear-gradient(125deg, #454443, transparent)";
    eventWrapper[i].style.background = "linear-gradient(125deg, rgb(91 87 84), transparent)";
    eventName[i].style.color = "#4d4b47";
    time_venue_Wrapper[i].style.color = "#343434";
}

function ongoing(i) {
    eventNumber[i].style.color = "#e7a65e";
    eventWrapper[i].style.background = "linear-gradient(125deg, #a9581b, transparent)";
    eventName[i].style.color = "#7d4317";
    time_venue_Wrapper[i].style.color = "rgb(99 39 15)";
}

function isOngoing(time, day) {
    let now = new Date()
    let [start, end] = time.split("-");
    let startTime = new Date("02/0" + day + "/24 " + start)
    let endTime = new Date("02/0" + day + "/24 " + end)
    // console.log(startTime, endTime);
    if (now >= startTime && now <= endTime) {
        return "ongoing";
    } else if (now > endTime) {
        return "completed";
    } else {
        return "upcoming";
    }
}

setInterval(() => {
    for (var i = 0; i < eventWrapper.length; i++) {
        let day;
        if (eventWrapper[i].closest(".schedule-1")) {
            day = 1;
        } else if (eventWrapper[i].closest(".schedule-2")) {
            day = 2;
        } else {
            day = 3;
        }
        // console.log(day, eventTimings[i].innerHTML.slice(0).trim().split("-"), isOngoing(eventTimings[i].innerHTML.slice(0).trim(), day + 1));
        let status = isOngoing(eventTimings[i].innerHTML.slice(0).trim(), day + 1);
        switch (status) {
            case "completed":
                completed(i);
                break;
            case "ongoing":
                ongoing(i);
                break;
        }
    }
}, 1000)

// --- END


// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topBar = document.querySelector(".top-bar");
let sponsorSection = document.querySelector(".middle-section");

const resetPositions = () => {
    // console.log("resetting");
    // header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
    // header.style.position = "relative";
    // header.style.paddingLeft = "40px";
    // header.style.marginTop = "5rem";
    // msg.style.marginTop = "1rem";
    topBar.classList.remove("transparent-glass-bg");
    // header.classList.add("text-3xl");
    // header.classList.remove("text-2xl");
}

window.addEventListener("scroll", function () {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    if (msg.style.paddingTop == "155px") {
        if (msgPositionFromTop > 0) {
            resetPositions();
            return;
        }
    }

    else {
        resetPositions();
    }
    if (msgPositionFromTop < 130) {
        // header.style.paddingLeft = "70px";
        // header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";

        if (msgPositionFromTop <= 90) {
            // msg.style.marginTop = "155px";
            // header.style.position = "fixed";
            // header.style.top = 0;
            // header.style.marginTop = "0.5rem";
            // header.classList.remove("text-3xl");
            // header.classList.add("text-2xl");
            topBar.classList.add("transparent-glass-bg")
        }
    }
    else {
        resetPositions();
    }
    setTimeout(() => {
        let msgPositionFromTop = msg.getBoundingClientRect().top;
        if (msgPositionFromTop > 130) {
            resetPositions()
        }
    }, 100)
});


changeDay(0)

