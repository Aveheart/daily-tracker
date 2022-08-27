
date = document.querySelector("#currentDay");
saveButton = document.querySelector('.saveBtn');
inputField = document.querySelector('.form-control')

// SHOW DATE ON PAGE
var today = moment().format("MMMM D, YYYY")
date.textContent = today;

// COLOR CODE BLOCKS BASED ON TIME
hour = moment().format('H')

$('.form-control').each(function(){
  let hourSelector = parseInt($(this).attr('id'));
  
  if (hourSelector > hour) {
    $(this).addClass("future");
} else if (hourSelector == hour) {
    $(this).addClass("present");
} else {
    $(this).addClass("past");
}
console.log(hour)
})

// SAVE INPUT
jQuery('.saveBtn').on('click', function(){

    var time = $(this).siblings(".hour").text();
    var todo = $(this).siblings(".todo").val();

    localStorage.setItem(time, todo);
})

// SAVE AFTER REFRESH
function saveOnRefresh() {

    $(".hour").each(function() {
        var hour = $(this).text();
        var todo = localStorage.getItem(hour);
  
        if(todo !== null) {
            $(this).siblings(".todo").val(todo);
        }
    });
  }
  
  saveOnRefresh()