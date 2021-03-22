var today = moment();

var dayWeek = today.format('dddd, MMMM Do');
$('#currentDay').text(dayWeek);

var timeEl = $('#time');
var inputEl = $('input');
var buttonEl = $('.saveBtn');

function hourUpdate(){
    var currentHour= moment().hours();
    hourUpdate();
    var interval = setInterval(hourUpdate, 60000);
}

hourUpdate();

function updateHours() {
    $('.time-block').each(function() {
        var hour = $(this).attr('id').split('-')[1]; // 11

        if (+hour < currentHour) {
            $(this).addClass('past'); 
        } else if (+hour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}

function checkTime()  {
    var currentTime = moment().hour('').format("HH:00");
    var timeBlockHours = $('.hour');

    for (var i=0; i < timeBlockHours.value; i++) {
        var timeElement = timeBlockHours[i].value;
        var manipID = document.getElementById(timeBlockHours[i].value);
        $(timeBlockHours[i].id).removeClass('hour');
        if (timeElement < currentTime) {
            $(manipID).addClass('past');
        } else if (timeElement > currentTime) {
            $(manipID).addClass('future');
        } else {
            $(manipID).addClass('present');
        }
    }
}

var userTask = document.querySelector('.description');

$('saveBtn').on('click', function(event){
    var value = $(event.target).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
})

$('hour-11 .description').val(localStorage.getItem('hour-11'))

$('#hour-' + hour[i])

buttonEl.on('click', function saveData(event) {
    event.preventDefault();
    var taskAtHand = {
        task: userTask.value
    };
    localStorage.setItem('taskAtHand', JSON.stringify(taskAtHand));
    renderLastTasks();
});

function renderLastTasks() {
    var lastTasks = JSON.parse(localStorage.getItem('taskAtHand'));
    if (lastTasks !== null) {
        document.querySelectorAll('.description').textContent = lastTasks.task
    }
}

startSchedule();
var saveBtn = $('saveBtn');
saveBtn.on('click', function () {
    var time = $(this).parent().attr('id');
    var planner = $(this).siblings('.planner').val();
    console.log(planner);
    console.log(time);
    localStorage.setItem(time, planner);
});

function colorBlock() {
    hour = time.hours();
    $('.time-block').each(function () {
        var thisHour = parseInt($(this).attr('id'));

        if (thisHour > hour) {
            $(this).addClass('future')
            console.log(time);
        } else if (thisHour === hour) {
            $(this).addClass('present');
            console.log(time);
        } else {
            $(this).addClass('past');
        }
    })
}

colorBlock();