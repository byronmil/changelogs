/* OLD
// Test data -- todo figure out how to randomize from today.
$(function () {
    $("#preFillts").click(function () {
      function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
        //var todayDate = new Date();
        //console.log(todayDate);
        //var todayDateUnix = Math.round(new Date(todayDate).getTime() / 1000);
        //console.log(todayDateUnix);
        //var todayDateUnixRandom = Math.floor(Math.random(+todayDateUnix * 100000));
        //console.log(todayDateUnixRandom);
        var ts1Test = randomDate(new Date(2020, 0, 1), new Date(2021, 5, 30));
        var ts1TestUnix = Math.round(new Date(ts1Test).getTime() / 1000);
        var ts2Test = randomDate(new Date(2021, 5, 30), new Date(2022, 0, 1));
        var ts2TestUnix = Math.round(new Date(ts2Test).getTime() / 1000);
        var ts3Test = randomDate(new Date(2022, 0, 1), new Date(2022, 5, 30));
        var ts3TestUnix = Math.round(new Date(ts3Test).getTime() / 1000);
        var tsCompTest = randomDate(new Date(2022, 0, 1), new Date(2022, 5, 30));
        var tsCompTestUnix = Math.round(new Date(tsCompTest).getTime() / 1000);
      document.getElementById("ts1").value = ts1TestUnix;
      document.getElementById("ts2").value = ts2TestUnix;
      document.getElementById("ts3").value = ts3TestUnix;
      document.getElementById("tscompare").value = tsCompTestUnix;
    });
}); */