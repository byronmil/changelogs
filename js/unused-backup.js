var secondBetweenTwoDate = Math.abs((stamp1 - stamp2) / 1000);
var stamp1 = 1644709049;
var stamp2 = 1643378921;




  <script>
    var stamp1 = 1644709049;
    var stamp2 = 1643378921;
    var secondBetweenTwoDate = Math.abs((stamp1 - stamp2) / 1000);
   document.write("Difference = "+secondBetweenTwoDate);
</script>








//  WIP(not working yet): Calculate two timestamps
function mydiff(date1,date2,interval) {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.round(timediff / week);
        case "days"   : return Math.round(timediff / day); 
        case "hours"  : return Math.round(timediff / hour); 
        case "minutes": return Math.round(timediff / minute);
        case "seconds": return Math.round(timediff / second);
        default: return undefined;
    }
}
