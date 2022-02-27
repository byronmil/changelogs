//  Todo:
//    - Figure out how to quickly add output file. Currently requires some modification
//    - Expand for other campaign-types

// Loop through array, build div for each result. (segmentcampaignchanges.js)
let text = "";
segmentcampaignchanges.forEach(myFunction);
document.getElementById("container").innerHTML = text;
function myFunction(item, index) {
  text += "<div class='flex-span' id=changelog-" + index + "><span class='who-when'><h3>Time/User</h3>"
  + "<span id=when-" + index + ">" + item.When + "</span>"
  + "<br><span id=user-" + index + ">" + item.User + "</span></span>"
  + "<span><h3>Segment Triggers</h3><pre id=segmenttrigger-" + index + ">" + JSON.stringify(item.SegmentTrigger, null, 2) + "</pre></span>"
  + "<span><h3>Filters</h3><pre id=filters-" + index + ">" + JSON.stringify(item.Filters, null, 2) + "</span></pre></span>"
  + "<span><h3>Conversion Action</h3><span id=conversionaction-" + index + ">" + item.ConversionAction + "</span><br><br><h3>Conversion Window</h3><span id=conversionwindow-" + index + ">" + item.ConversionWindow + "</span><br><br><h3>Conversion Segment</h3><span class='changeConversionSegment'><pre id=conversionsegment-" + index + ">" + JSON.stringify(item.ConversionSegment, null, 2) + "</pre></span><br><br><h3>Exit Conditions</h3>ExitOnTriggerOrFilterNotMatched: <span id=exitontriggerorfilternotmatched-" + index + ">" + item.ExitOnTriggerOrFilterNotMatched + "</span><br>ExitOnConversionMatched: <span id=exitonconversionismatched-" + index + ">" + item.ExitOnConversionMatched + "</span><br>ExitOnlyAfterMessage: <span id=exitonlyaftermessage-" + index + ">" + item.ExitOnlyAfterMessage + "</span></span>"
  + "</div>"; 
}

// Improves the code mess at the bottom of file
// Compare previous index to current, add highlight class if diff
segmentcampaignchanges.forEach(myChanges);
function myChanges(item, index, array) {
  if (index != 0) {
    if (JSON.stringify(segmentcampaignchanges[index - 1].When) != JSON.stringify(segmentcampaignchanges[index].When)) {
  document.getElementById("when-" + index).className = " highlight";
    }
    if (JSON.stringify(segmentcampaignchanges[index - 1].User) != JSON.stringify(segmentcampaignchanges[index].User)) {
    document.getElementById("user-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].SegmentTrigger) != JSON.stringify(segmentcampaignchanges[index].SegmentTrigger)) {
    document.getElementById("segmenttrigger-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].Filters) != JSON.stringify(segmentcampaignchanges[index].Filters)) {
    document.getElementById("filters-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].ConversionAction) != JSON.stringify(segmentcampaignchanges[index].ConversionAction)) {
    document.getElementById("conversionaction-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].ConversionWindow) != JSON.stringify(segmentcampaignchanges[index].ConversionWindow)) {
    document.getElementById("conversionwindow-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].ConversionSegment) != JSON.stringify(segmentcampaignchanges[index].ConversionSegment)) {
    document.getElementById("conversionsegment-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].ExitOnConversionMatched) != JSON.stringify(segmentcampaignchanges[index].ExitOnConversionMatched)) {
    document.getElementById("exitonconversionismatched-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].ExitOnTriggerOrFilterNotMatched) != JSON.stringify(segmentcampaignchanges[index].ExitOnTriggerOrFilterNotMatched)) {
    document.getElementById("exitontriggerorfilternotmatched-" + index).className = " highlight";
    };
    if (JSON.stringify(segmentcampaignchanges[index - 1].ExitOnlyAfterMessage) != JSON.stringify(segmentcampaignchanges[index].ExitOnlyAfterMessage)) {
    document.getElementById("exitonlyaftermessage-" + index).className = " highlight";
    };
  };
  /*
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index]));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].When));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].User));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].SegmentTrigger));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].Filters));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].ConversionAction));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].ConversionWindow));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].ConversionSegment));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].ExitOnConversionMatched));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].ExitOnTriggerOrFilterNotMatched));
    console.log("index 0: " + JSON.stringify(segmentcampaignchanges[index].ExitOnlyAfterMessage));
    for(const [index,value] of segmentcampaignchanges.entries()){
      console.log(index,value);
    }
    console.log(JSON.stringify(segmentcampaignchanges));
  */
};

// Highlight on click prototype
// Need to loop through each value to compare
document.getElementById('highlighter').addEventListener('click', function random() {
   highlight($("#filters-1"), $("#filters-0"));
  function highlight(newElem, oldElem){ 
    var oldText = oldElem.text(),     
        text = '';
    newElem.text().split('').forEach(function(val, i){  // Find a way to stop at new line
      if (val != oldText.charAt(i))
        text += "<span class='highlight-2'>"+val+"</span>";  
      else
        text += val;            
    });
    newElem.html(text);
  }
});

/*
// Don't look here. It worked just fine for the first POC...
var filter0 = document.getElementById('filters-0').textContent;
var filter1 = document.getElementById('filters-1').textContent;
var filter2 = document.getElementById('filters-2').textContent;
var filter3 = document.getElementById('filters-3').textContent;
var filter4 = document.getElementById('filters-4').textContent;
var when0 = document.getElementById('when-0').textContent;
var when1 = document.getElementById('when-1').textContent;
var when2 = document.getElementById('when-2').textContent;
var when3 = document.getElementById('when-3').textContent;
var when4 = document.getElementById('when-4').textContent;
var user0 = document.getElementById('user-0').textContent;
var user1 = document.getElementById('user-1').textContent;
var user2 = document.getElementById('user-2').textContent;
var user3 = document.getElementById('user-3').textContent;
var user4 = document.getElementById('user-4').textContent;
var seggmenttrigger0 = document.getElementById('segmenttrigger-0').textContent;
var seggmenttrigger1 = document.getElementById('segmenttrigger-1').textContent;
var seggmenttrigger2 = document.getElementById('segmenttrigger-2').textContent;
var seggmenttrigger3 = document.getElementById('segmenttrigger-3').textContent;
var seggmenttrigger4 = document.getElementById('segmenttrigger-4').textContent;
var conversionaction0 = document.getElementById('conversionaction-0').textContent;
var conversionaction1 = document.getElementById('conversionaction-1').textContent;
var conversionaction2 = document.getElementById('conversionaction-2').textContent;
var conversionaction3 = document.getElementById('conversionaction-3').textContent;
var conversionaction4 = document.getElementById('conversionaction-4').textContent;
var conversionwindow0 = document.getElementById('conversionwindow-0').textContent;
var conversionwindow1 = document.getElementById('conversionwindow-1').textContent;
var conversionwindow2 = document.getElementById('conversionwindow-2').textContent;
var conversionwindow3 = document.getElementById('conversionwindow-3').textContent;
var conversionwindow4 = document.getElementById('conversionwindow-4').textContent;
var conversionsegment0 = document.getElementById('conversionsegment-0').textContent;
var conversionsegment1 = document.getElementById('conversionsegment-1').textContent;
var conversionsegment2 = document.getElementById('conversionsegment-2').textContent;
var conversionsegment3 = document.getElementById('conversionsegment-3').textContent;
var conversionsegment4 = document.getElementById('conversionsegment-4').textContent;
var exitontriggerorfilternotmatched0 = document.getElementById('exitontriggerorfilternotmatched-0').textContent;
var exitontriggerorfilternotmatched1 = document.getElementById('exitontriggerorfilternotmatched-1').textContent;
var exitontriggerorfilternotmatched2 = document.getElementById('exitontriggerorfilternotmatched-2').textContent;
var exitontriggerorfilternotmatched3 = document.getElementById('exitontriggerorfilternotmatched-3').textContent;
var exitontriggerorfilternotmatched4 = document.getElementById('exitontriggerorfilternotmatched-4').textContent;
var exitonconversionismatched0 = document.getElementById('exitonconversionismatched-0').textContent;
var exitonconversionismatched1 = document.getElementById('exitonconversionismatched-1').textContent;
var exitonconversionismatched2 = document.getElementById('exitonconversionismatched-2').textContent;
var exitonconversionismatched3 = document.getElementById('exitonconversionismatched-3').textContent;
var exitonconversionismatched4 = document.getElementById('exitonconversionismatched-4').textContent;
var exitonlyaftermessage0 = document.getElementById('exitonlyaftermessage-0').textContent;
var exitonlyaftermessage1 = document.getElementById('exitonlyaftermessage-1').textContent;
var exitonlyaftermessage2 = document.getElementById('exitonlyaftermessage-2').textContent;
var exitonlyaftermessage3 = document.getElementById('exitonlyaftermessage-3').textContent;
var exitonlyaftermessage4 = document.getElementById('exitonlyaftermessage-4').textContent;
if (filter0 != filter1) {
  document.getElementById("filters-1").className = " highlight";
  };
if (filter1 != filter2) {
  document.getElementById("filters-2").className = " highlight";
  };
if (filter2 != filter3) {
  document.getElementById("filters-3").className = " highlight";
  };
if (filter3 != filter4) {
  document.getElementById("filters-4").className = " highlight";
  };
if (when0 != when1) {
  document.getElementById("when-1").className = " highlight";
  };
if (when1 != when2) {
  document.getElementById("when-2").className = " highlight";
  };
if (when2 != when3) {
  document.getElementById("when-3").className = " highlight";
  };
if (when3 != when4) {
  document.getElementById("when-4").className = " highlight";
  };
if (user0 != user1) {
  document.getElementById("user-1").className = " highlight";
  };
if (user1 != user2) {
  document.getElementById("user-2").className = " highlight";
  };
if (user2 != user3) {
  document.getElementById("user-3").className = " highlight";
  };
if (user3 != user4) {
  document.getElementById("user-4").className = " highlight";
  };
if (seggmenttrigger0 != seggmenttrigger1) {
  document.getElementById("segmenttrigger-1").className = " highlight";
  };
if (seggmenttrigger1 != seggmenttrigger2) {
  document.getElementById("segmenttrigger-2").className = " highlight";
  };
if (seggmenttrigger2 != seggmenttrigger3) {
  document.getElementById("segmenttrigger-3").className = " highlight";
  };
if (seggmenttrigger3 != seggmenttrigger4) {
  document.getElementById("segmenttrigger-4").className = " highlight";
  };
if (conversionaction0 != conversionaction1) {
  document.getElementById("conversionaction-1").className = " highlight";
  };
if (conversionaction1 != conversionaction2) {
  document.getElementById("conversionaction-2").className = " highlight";
  };
if (conversionaction2 != conversionaction3) {
  document.getElementById("conversionaction-3").className = " highlight";
  };
if (conversionaction3 != conversionaction4) {
  document.getElementById("conversionaction-4").className = " highlight";
  };
if (conversionwindow0 != conversionwindow1) {
  document.getElementById("conversionwindow-1").className = " highlight";
  };
if (conversionwindow1 != conversionwindow2) {
  document.getElementById("conversionwindow-2").className = " highlight";
  };
if (conversionwindow2 != conversionwindow3) {
  document.getElementById("conversionwindow-3").className = " highlight";
  };
if (conversionwindow3 != conversionwindow4) {
  document.getElementById("conversionwindow-4").className = " highlight";
  };
if (conversionsegment0 != conversionsegment1) {
  document.getElementById("conversionsegment-1").className = " highlight";
  };
if (conversionsegment1 != conversionsegment2) {
  document.getElementById("conversionsegment-2").className = " highlight";
  };
if (conversionsegment2 != conversionsegment3) {
  document.getElementById("conversionsegment-3").className = " highlight";
  };
if (conversionsegment3 != conversionsegment4) {
  document.getElementById("conversionsegment-4").className = " highlight";
  };
if (exitontriggerorfilternotmatched0 != exitontriggerorfilternotmatched1) {
  document.getElementById("exitontriggerorfilternotmatched-1").className = " highlight";
  };
if (exitontriggerorfilternotmatched1 != exitontriggerorfilternotmatched2) {
  document.getElementById("exitontriggerorfilternotmatched-2").className = " highlight";
  };
if (exitontriggerorfilternotmatched2 != exitontriggerorfilternotmatched3) {
  document.getElementById("exitontriggerorfilternotmatched-3").className = " highlight";
  };
if (exitontriggerorfilternotmatched3 != exitontriggerorfilternotmatched3) {
  document.getElementById("exitontriggerorfilternotmatched-4").className = " highlight";
  };
if (exitonconversionismatched0 != exitonconversionismatched1) {
  document.getElementById("exitonconversionismatched-1").className = " highlight";
  };
if (exitonconversionismatched1 != exitonconversionismatched2) {
  document.getElementById("exitonconversionismatched-2").className = " highlight";
  };
if (exitonconversionismatched2 != exitonconversionismatched3) {
  document.getElementById("exitonconversionismatched-2").className = " highlight";
  };
if (exitonconversionismatched3 != exitonconversionismatched4) {
  document.getElementById("exitonconversionismatched-2").className = " highlight";
  };
if (exitonlyaftermessage0 != exitonlyaftermessage1) {
  document.getElementById("exitonlyaftermessage-1").className = " highlight";
  };
if (exitonlyaftermessage1 != exitonlyaftermessage2) {
  document.getElementById("exitonlyaftermessage-2").className = " highlight";
  };
if (exitonlyaftermessage2 != exitonlyaftermessage3) {
  document.getElementById("exitonlyaftermessage-3").className = " highlight";
  };
if (exitonlyaftermessage3 != exitonlyaftermessage4) {
  document.getElementById("exitonlyaftermessage-4").className = " highlight";
  };
*/
