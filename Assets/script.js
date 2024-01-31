$(document).ready(function () {

  let displayTime = document.querySelector("#currentDay");

  let currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss");

  displayTime.textContent = currentTime;

  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
  });

  function timeTracker() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  timeTracker();

  function displayText() {
    $('.time-block').each(function () {
      var blockHour = $(this).attr('id');
      $(this).children('.description').val(localStorage.getItem(blockHour));
    });
  }
  displayText();
});

