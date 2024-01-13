let day_border = document.querySelectorAll(".day-border");
let schedule_table = document.querySelectorAll(".schedule-table");

function findActiveIndex() {
    let i;
    for(i = 0; i < day_border.length; i++) {
        if(day_border[i].classList.contains('active'))
        break;
    }
    return i;
}

function changeDay(new_index) {
    
    let current_active_index = findActiveIndex();
    day_border[current_active_index].classList.remove('active');
    day_border[new_index].classList.add('active');
    
    schedule_table[current_active_index].classList.remove('visible');
    schedule_table[new_index].classList.add('visible');
}