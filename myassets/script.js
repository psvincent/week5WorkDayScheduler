$(document).ready(function () {
// This displays the current date and time in the header using JQuery.
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
// This allows the save Button to be what you press to enter what you put in the content box to be entered into the local storage.
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
// This allows you to load anything you entered from the local storage for each hour.
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
// This tracks the time and changes the colors accordingly.
function tracker() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
        var block = parseInt($(this).attr("id").split("hour")[1]);
        if (block < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (block === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else if (block > currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
tracker();
})

