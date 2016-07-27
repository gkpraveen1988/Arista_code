function DisplayCurrentTime() {
  var date = new Date();
  var hours = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
  var minutes = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
  var seconds = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();
  time = hours + ":" + minutes + ":" + seconds;
  return time;
}

function timeFormat(timeValue1,timeValue2) {
  duration = (timeValue2-timeValue1)*1000;
  var seconds = parseInt((duration / 1000) % 60),
  minutes = parseInt((duration / (1000 * 60)) % 60),
  hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return minutes + " minutes " + seconds + " seconds ";
}
function toSeconds(time, divisor) {
  var hms = time;
  var splitData = hms.split(':');
  var seconds = (+splitData[0]) * 60 * 60 + (+splitData[1]) * 60 + (+splitData[2]);
  seconds = Math.floor(seconds / divisor);
  return seconds;
}