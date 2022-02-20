// Get Unix timestamp & update every second
$(document).ready(
  function convert(){
    setInterval(function() {
    // Current unix timestamp, refresh every second
    var dt =  Math.floor(new Date() / 1000);
    document.getElementById('timestamp-now').textContent=dt;
    // Unix to human
    var unixtimestamp = Math.floor(new Date() / 1000);
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var date = new Date(unixtimestamp*1000);
    var year = date.getFullYear();
    var month = months_arr[date.getMonth()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    document.getElementById('datetime-human').textContent = convdataTime;
  }, 1000);
});

// Test Data - Randomize by today's date within limited range.
document.getElementById('preFillts').addEventListener('click', function random() {
  var todayDate = new Date();
  var todayDateUnix = Math.round(new Date(todayDate).getTime() / 1000);
  // 6mo - 1.5 years ago
  var ts1maximum = todayDateUnix - 15778463;
  var ts1minimum = todayDateUnix - 47335389;
  var ts1random = Math.floor(Math.random() * (ts1maximum - ts1minimum + 1)) + ts1minimum;
  // +1 month / -3months month
  var ts2maximum = todayDateUnix + 2629743;
  var ts2minimum = todayDateUnix - 7889229;
  var ts2random = Math.floor(Math.random() * (ts2maximum - ts2minimum + 1)) + ts2minimum;
  // +/- 1 week
  var ts3maximum = todayDateUnix + 604800;
  var ts3minimum = todayDateUnix - 604800;
  var ts3random = Math.floor(Math.random() * (ts3maximum - ts3minimum + 1)) + ts3minimum;
  // +1 month to -3 months
  var tscomparemaximum = todayDateUnix + 2629743;
  var tscompareminimum = todayDateUnix - 7889229;
  var tscomparerandom = Math.floor(Math.random() * (tscomparemaximum - tscompareminimum + 1)) + tscompareminimum;
  document.getElementById("ts1").value = ts1random;
  document.getElementById("ts2").value = ts2random;
  document.getElementById("ts3").value = ts3random;
  document.getElementById("tscompare").value = tscomparerandom;
});

// Clear data
$(function () {
    $("#preFill-clear").click(function () {
      document.getElementById("ts1").value = "";
      document.getElementById("ts2").value = "";
      document.getElementById("ts3").value = "";
      document.getElementById("tscompare").value = "";
    });
});

// Calculate against compared timestamp & 'now'
document.getElementById('calculate').addEventListener('click', function() {
  $(".calculated").switchClass("calculated", "calculated-on");
  $("html, body").animate({ scrollTop: '180px' }, "slow");
  var tsnow = Math.floor(new Date() / 1000);
  var tsnow = +tsnow;
  var tscompare = document.getElementById("tscompare").value;
  var tscompare = +tscompare;
  var ts1 = document.getElementById("ts1").value;
  var ts1 = +ts1;
  var ts2 = document.getElementById("ts2").value;
  var ts2 = +ts2;
  var ts3 = document.getElementById("ts3").value;
  var ts3 = +ts3;
  var total1 = Math.abs((tscompare - ts1));
  document.getElementById("total1").textContent = secondsToDhms(total1);
  var total2 = Math.abs((tscompare - ts2));
  document.getElementById("total2").textContent = secondsToDhms(total2);
  var total3 = Math.abs((tscompare - ts3));
  document.getElementById("total3").textContent = secondsToDhms(total3);
  var total1now = Math.abs((tsnow - ts1));
  document.getElementById("total1-now").textContent = secondsToDhms(total1now);
  var total2now = Math.abs((tsnow - ts2));
  document.getElementById("total2-now").textContent = secondsToDhms(total2now);
  var total3now = Math.abs((tsnow - ts3));
  document.getElementById("total3-now").textContent = secondsToDhms(total3now);
  var tsnow = Math.floor(new Date() / 1000);
  document.getElementById("timestamp-snapshot").textContent = tsnow;
  var unixtimestamp = Math.floor(new Date() / 1000);
  var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var date = new Date(unixtimestamp*1000);
  var year = date.getFullYear();
  var month = months_arr[date.getMonth()];
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  // Display date time in MM-dd-yyyy h:m:s format
  var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById("timestamp-snapshot-human").textContent = convdataTime;

  // print input timestamps on results
  document.getElementById("timestamp-1-input").textContent = ts1;
  document.getElementById("timestamp-2-input").textContent = ts2;
  document.getElementById("timestamp-3-input").textContent = ts3;
  document.getElementById("timestamp-snapshot-compared").textContent = tscompare;

  // Compared to Human
  var dateTimeComp = new Date(tscompare*1000);
  var year = dateTimeComp.getFullYear();
  var month = months_arr[dateTimeComp.getMonth()];
  var day = dateTimeComp.getDate();
  var hours = dateTimeComp.getHours();
  var minutes = "0" + dateTimeComp.getMinutes();
  var seconds = "0" + dateTimeComp.getSeconds();
  var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById("timestamp-snapshot-compared-human").textContent = convdataTime;
  // TS1 to Human
  var dateTs1 = new Date(ts1*1000);
  var year = dateTs1.getFullYear();
  var month = months_arr[dateTs1.getMonth()];
  var day = dateTs1.getDate();
  var hours = dateTs1.getHours();
  var minutes = "0" + dateTs1.getMinutes();
  var seconds = "0" + dateTs1.getSeconds();
  var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById("timestamp-1-input-human").textContent = convdataTime;
  // TS2 to Human
  var dateTs2 = new Date(ts2*1000);
  var year = dateTs2.getFullYear();
  var month = months_arr[dateTs2.getMonth()];
  var day = dateTs2.getDate();
  var hours = dateTs2.getHours();
  var minutes = "0" + dateTs2.getMinutes();
  var seconds = "0" + dateTs2.getSeconds();
  var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById("timestamp-2-input-human").textContent = convdataTime;
  // TS3 to Human
  var dateTs3 = new Date(ts3*1000);
  var year = dateTs3.getFullYear();
  var month = months_arr[dateTs3.getMonth()];
  var day = dateTs3.getDate();
  var hours = dateTs3.getHours();
  var minutes = "0" + dateTs3.getMinutes();
  var seconds = "0" + dateTs3.getSeconds();
  var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById("timestamp-3-input-human").textContent = convdataTime;

  // Update text for evaluation
  var afterComp = "after the commpared timestamp";
  var beforeComp = "before the compared timestamp";
  var equalComp = "equal to the compared timestamp"
  var afterNow = "from now";
  var beforeNow = "before now";
  var equalNow = "equal to now";
  var tscompareResult1 = document.getElementById('before-after-comp-1');
    if (ts1 > tscompare) {
        tscompareResult1.textContent = afterComp;
    } else if (ts1 === tscompare) {
        tscompareResult1.textContent = equalComp;
       }
     else {
        tscompareResult1.textContent = beforeComp;
    }
  var tscompareResult2 = document.getElementById('before-after-comp-2');
    if (ts2 > tscompare) {
        tscompareResult2.textContent = afterComp;
    } else if (ts2 === tscompare) {
        tscompareResult2.textContent = equalComp;
       }
     else {
        tscompareResult2.textContent = beforeComp;
    }
  var tscompareResult3 = document.getElementById('before-after-comp-3');
    if (ts3 > tscompare) {
        tscompareResult3.textContent = afterComp;
    } else if (ts3 === tscompare) {
        tscompareResult3.textContent = equalComp;
       }
     else {
        tscompareResult3.textContent = beforeComp;
    }
  var tsnowResult1 = document.getElementById('before-after-now-1');
    if (ts1 > tsnow) {
        tsnowResult1.textContent = afterNow;
    } else if (ts1 === tsnow) {
        tsnowResult1.textContent = equalNow;
       }
     else {
        tsnowResult1.textContent = beforeNow;
    }
  var tsnowResult2 = document.getElementById('before-after-now-2');
    if (ts2 > tsnow) {
        tsnowResult2.textContent = afterNow;
    } else if (ts2 === tsnow) {
        tsnowResult2.textContent = equalNow;
       }
     else {
        tsnowResult2.textContent = beforeNow;
    }
  var tsnowResult3 = document.getElementById('before-after-now-3');
    if (ts3 > tsnow) {
        tsnowResult3.textContent = afterNow;
    } else if (ts3 === tsnow) {
        tsnowResult3.textContent = equalNow;
       }
     else {
        tsnowResult3.textContent = beforeNow;
    };

  var whatDate = Math.round((new Date()).getTime() / 1000);
  var weekAgo = +whatDate - 604800; // seconds in week
  var weekFrom = +whatDate + 604800;
    if (ts1 > weekAgo) {
        document.getElementById("ago-beforeAfter-1").textContent = "after";
      } else {
        document.getElementById("ago-beforeAfter-1").textContent = "before";
      }
    if (ts2 > weekAgo) {
        document.getElementById("ago-beforeAfter-2").textContent = "after";
      } else {
        document.getElementById("ago-beforeAfter-2").textContent = "before";
      }
    if (ts3 > weekAgo) {
        document.getElementById("ago-beforeAfter-3").textContent = "after";
      } else {
        document.getElementById("ago-beforeAfter-3").textContent = "before";
      }
    if (ts1 > weekFrom) {
        document.getElementById("from-beforeAfter-1").textContent = "after";
      } else {
        document.getElementById("from-beforeAfter-1").textContent = "before";
      }
    if (ts2 > weekFrom) {
        document.getElementById("from-beforeAfter-2").textContent = "after";
      } else {
        document.getElementById("from-beforeAfter-2").textContent = "before";
      }
    if (ts3 > weekFrom) {
        document.getElementById("from-beforeAfter-3").textContent = "after";
      } else {
        document.getElementById("from-beforeAfter-3").textContent = "before";
      }
});

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum/1000;
}

// Convert date to Unix todo: handle NaN/Undefined
document.getElementById('tsconvert').addEventListener('input', function() {
  var tsConvert = document.getElementById("tsconvert").value;
  var tsConvertLocal = new Date(tsConvert.replace(/-/g,'/'));
  var dateConvert = toTimestamp(tsConvertLocal);
  // document.getElementById("date-converted").textContent = tsConvert + " = " ;
  // document.getElementById("date-converted-unix").textContent = dateConvert;
  document.getElementById("tscompare").value = dateConvert;
  if (tsConvertLocal == "Invalid Date") {
    document.getElementById("date-converted-unix").textContent = "select a valid date";
  } else {
    document.getElementById("date-converted-unix").textContent = dateConvert;
  }
});

// Convert seconds to weeks, days, hours, minutes, seconds
function secondsToDhms(seconds) {
  const date1 = dayjs('ts1')
  date1.diff('tsnow', 'month') // 7
  seconds = Number(seconds);
  var w = Math.floor(seconds % (3600*24*31536000) / 604800);
  var d = Math.floor(seconds % (3600*24*7) / 86400);
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var wDisplay = w > 0 ? w + (w == 1 ? " week, " : " weeks, ") : "";
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return (wDisplay + dDisplay + hDisplay + mDisplay + sDisplay).replace(/,\s*$/, "");
};

// Add or subtract day/week from compare timestamp
$(function () {
    $("#add-day").click(function () {
      var identifyMe = document.getElementById("tscompare").value;
      var numberMe = +identifyMe;
      document.getElementById("tscompare").value = numberMe + 86400;
    });
    $("#sub-day").click(function () {
      var identifyMe = document.getElementById("tscompare").value;
      var numberMe = +identifyMe;
      document.getElementById("tscompare").value = numberMe - 86400;
    });
    $("#add-week").click(function () {
      var identifyMe = document.getElementById("tscompare").value;
      var numberMe = +identifyMe;
      document.getElementById("tscompare").value = numberMe + 604800;
    });
    $("#sub-week").click(function () {
      var identifyMe = document.getElementById("tscompare").value;
      var numberMe = +identifyMe;
      document.getElementById("tscompare").value = numberMe - 604800;
    });
});
