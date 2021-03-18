var dateInputEl = $('#datepicker');

$(function () {
    $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
    });
});

var handleFormSubmit = function (event) {
    event.preventDefault();

var dateInput = dateInputEl.val();

    if (!dateInput) {
    console.log('You need to fill out the form!');
    return;
    }

    printSkills(dateInput);

    // resets form
    dateInputEl.val('');
};