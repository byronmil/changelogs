// REMINDER: YOU CHANGED "EventD ataFilters" BECAUSE YOU'RE TOO LAZY TO DEAL WITH THE SPACE
/*
console.log(campaignchanges[0].User);
console.log(campaignchanges[0].When);
console.log(campaignchanges[0].EventTrigger);
console.log(campaignchanges[0].EventDataFilters);
console.log(campaignchanges[0].Filters);
console.log(campaignchanges[0].ConversionAction);
console.log(campaignchanges[0].ConversionWindow);
console.log(campaignchanges[0].ConversionSegment);
console.log(campaignchanges[0].ExitOnTriggerOrFilterNotMatched);
console.log(campaignchanges[0].ExitOnConversionMatched);
console.log(campaignchanges[0].ExitOnlyAfterMessage);
*/

/*
document.getElementById("p0").textContent = (campaignchanges[0].User);
document.getElementById("p1").textContent = (campaignchanges[0].When);
document.getElementById("p2").textContent = (campaignchanges[0].EventTrigger);
var eventDataFilters = JSON.stringify(campaignchanges[0].EventDataFilters);
document.getElementById("p3").textContent = eventDataFilters;
var filters = JSON.stringify(campaignchanges[0].Filters);
document.getElementById("p4").textContent = filters;
document.getElementById("p5").textContent = (campaignchanges[0].ConversionAction);
document.getElementById("p6").textContent = (campaignchanges[0].ConversionWindow);
var conversionSegment = JSON.stringify(campaignchanges[0].ConversionSegment);
document.getElementById("p7").textContent = conversionSegment;
document.getElementById("p8").textContent = (campaignchanges[0].ExitOnTriggerOrFilterNotMatched);
document.getElementById("p9").textContent = (campaignchanges[0].ExitOnConversionMatched);
document.getElementById("p10").textContent = (campaignchanges[0].ExitOnlyAfterMessage);
*/
/*
for (var key in campaignchanges) {
  if (campaignchanges.hasOwnProperty(key)) {
    document.getElementById("p0").innerHtml = (campaignchanges[key].User);
    document.getElementById("p1").innerHtml = (campaignchanges[key].When);
  }
}
*/

contentStr = "";

campaignchanges.forEach(function(campaignchanges){
    contentStr += "<div class='flex-span'><span>"+ campaignchanges.When + "</span><span>" + campaignchanges.User + "</span><span>" + campaignchanges.EventTrigger + "</span><span>" + JSON.stringify(campaignchanges.EventDataFilters) + "</span><span>" + JSON.stringify(campaignchanges.Filters) + "</span><span>" + campaignchanges.ConversionAction + "</span><span>" + campaignchanges.ConversionWindow + "</span><span>" + JSON.stringify(campaignchanges.ConversionSegment) + "</span><span>" + campaignchanges.ExitOnTriggerOrFilterNotMatched + "</span><span>" + campaignchanges.ExitOnConversionMatched + "</span><span>" + campaignchanges.ExitOnlyAfterMessage + "</span></div>";
});
document.getElementById('container').innerHTML = contentStr;

/*
for (var key in campaignchanges) {
  if (campaignchanges.hasOwnProperty(key)) {

    console.log(campaignchanges[key].User);
    console.log(campaignchanges[key].When);
  }
}
*/