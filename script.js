$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      // save in localStorage
      localStorage.setItem(time, value);
    });


//$(document).ready(function() {

//})
// listen for save button

//document.getElementById("btn saveBtn col-md-1").addEventListener('click', '');

// get any values inputted
//let description = document.getElementById("col-md-10 description").value



// save in localStorage

// $("#hour-9 .description").val(localStorage.setItem("hour-9"));
// $("#hour-10 .description").val(localStorage.setItem("hour-10"));
// $("#hour-11 .description").val(localStorage.setItem("hour-11"));
// $("#hour-12 .description").val(localStorage.setItem("hour-12"));
// $("#hour-13 .description").val(localStorage.setItem("hour-13"));
// $("#hour-14 .description").val(localStorage.setItem("hour-14"));
// $("#hour-15 .description").val(localStorage.setItem("hour-15"));
// $("#hour-16 .description").val(localStorage.setItem("hour-16"));
// $("#hour-17 .description").val(localStorage.setItem("hour-17"));



// function that updates every hour
function hourUpdater() {
    var currentHour = moment().hours();
// loop over time blocks
$(".time-block").each(function() {
// converting the military time so it's readable
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
// check if we've moved past this time
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}
            
hourUpdater();


// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// load any saved data from localStorage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});

// display current day on page
 
// var now = moment()
// document.getElementById(currentDay).textContent(moment);

// function hourUpdater() {
//    var currentDays = moment().day();
//    document.getElementById(currentDay)
//   document.textContent(currentDays)
    

 
 

