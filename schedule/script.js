// Code for switching schedules day wise:
// START ---
let day_border = document.querySelectorAll(".day-border");
let schedule_table = document.querySelectorAll(".schedule-table");

function removeActiveTables(num) {
    // function to remove visibility of active tables nad also active indicator for day tabs
    if(num >= 3) num -= 3;
    else num += 3;
    for(let i = 0; i < day_border.length; i++) {
        if(i != num) {
            day_border[i].classList.remove('active');
            schedule_table[i].classList.remove('visible');
        }
    }
}

function addActiveTables(num) {
    // function to make currently clicked day tab's respective schedules visible
    let i = num;
    if(num >= 3) i -= 3;
    else i += 3;
    day_border[i].classList.add('active');
    schedule_table[i].classList.add('visible');
    day_border[num].classList.add('active');
    schedule_table[num].classList.add('visible');

    // For mobile mode: code below is to make the schedule event cards visible
    if(num >= 3) num -= 3;
    let scheduleCard = document.querySelectorAll('.schedule-' + (num+1) + ' .event-wrapper');
    for(let j = 0; j < scheduleCard.length; j++) {
        scheduleCard[j].classList.remove('infinite-pos');
    }
}

function initDelays(num) {
    let scheduleCard = document.querySelectorAll('.schedule-' + (num+1) + ' .event-wrapper');
    for(let j = 0; j < scheduleCard.length; j++) {
        scheduleCard[j].style.transitionDelay = (j+1)*2 + "00ms";
    }
}
initDelays(0);  // initializing delay for day-1 schedule event cards
let topSection = document.querySelector('.top-section');
let middleSection = document.querySelector('.middle-section');
function changeDay(dayNumber) {
    // function to change day tabs for viewing schedules of each day
    initDelays(dayNumber);
    let scheduleCardAll = document.querySelectorAll('.event-wrapper');
    for(let j = 0; j < scheduleCardAll.length; j++) {
            scheduleCardAll[j].classList.add('infinite-pos');
    }
    if(toggleSection.style.position === "fixed")
    topSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    removeActiveTables(dayNumber);
    addActiveTables(dayNumber);
}
//  --- END

// Code for making toggler section fixed when scrolled down further:
// START ---
let toggleSection = document.querySelector('.toggler');
let scheduleSection = document.querySelector('#schedule');
window.addEventListener('scroll', function() {
    let togglerPositionFromTop = toggleSection.pageYOffSet;
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    console.log(togglerPositionFromTop)
    if(currentScrollPos > 200) {
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
const current_MM = currentDate.getMonth()+1;
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
completed(0);
ongoing(1)
// --- END