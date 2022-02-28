//  Todo:
//    - Expand for other campaign-types

// Have a scample
document.getElementById("sampledata").addEventListener('click', function random() {
  document.getElementById('jsoninput').value = JSON.stringify(segmentcampaignchangesSample, null, 2);
});

document.getElementById('submit').addEventListener('click', function random() {
  const segmentcampaignchangesInput = document.getElementById("jsoninput").value;
  const segmentcampaignchanges = JSON.parse(segmentcampaignchangesInput);
  //console.log(segmentcampaignchanges);
  $("html, body").animate({ scrollTop: '525px' }, "medium");

  // Loop through array, build div for each result. (pulling from segmentcampaignchanges.js)
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

  // If index > 0, compare index to previous and highlight on diff
  segmentcampaignchanges.forEach(myChanges);
  function myChanges(item, index, array) {
    if (index != 0) {
      if (JSON.stringify(segmentcampaignchanges[index - 1].When) != JSON.stringify(segmentcampaignchanges[index].When)) {
    document.getElementById("when-" + index).className = "highlight";
      }
      if (JSON.stringify(segmentcampaignchanges[index - 1].User) != JSON.stringify(segmentcampaignchanges[index].User)) {
      document.getElementById("user-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].SegmentTrigger) != JSON.stringify(segmentcampaignchanges[index].SegmentTrigger)) {
      document.getElementById("segmenttrigger-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].Filters) != JSON.stringify(segmentcampaignchanges[index].Filters)) {
      document.getElementById("filters-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].ConversionAction) != JSON.stringify(segmentcampaignchanges[index].ConversionAction)) {
      document.getElementById("conversionaction-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].ConversionWindow) != JSON.stringify(segmentcampaignchanges[index].ConversionWindow)) {
      document.getElementById("conversionwindow-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].ConversionSegment) != JSON.stringify(segmentcampaignchanges[index].ConversionSegment)) {
      document.getElementById("conversionsegment-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].ExitOnConversionMatched) != JSON.stringify(segmentcampaignchanges[index].ExitOnConversionMatched)) {
      document.getElementById("exitonconversionismatched-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].ExitOnTriggerOrFilterNotMatched) != JSON.stringify(segmentcampaignchanges[index].ExitOnTriggerOrFilterNotMatched)) {
      document.getElementById("exitontriggerorfilternotmatched-" + index).className = "highlight";
      };
      if (JSON.stringify(segmentcampaignchanges[index - 1].ExitOnlyAfterMessage) != JSON.stringify(segmentcampaignchanges[index].ExitOnlyAfterMessage)) {
      document.getElementById("exitonlyaftermessage-" + index).className = "highlight";
      };
    };
    /*
      See outputs for testing
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

  // Highligthing refinement -- highlights specific character differences
  document.getElementById('highlighter').addEventListener('click', function random() {
    if (document.getElementById('highlighter').textContent === "Refine Highlight") {
      document.getElementById('highlighter').textContent = "Disable Refine Highlight"
    segmentcampaignchanges.forEach(myHighlighter);
    function myHighlighter(item, index) {
      highlight($("#when-" + (index + 1)), $("#when-" + index));
      highlight($("#user-" + (index + 1)), $("#user-" + index));
      highlight($("#segmenttrigger-" + (index + 1)), $("#segmenttrigger-" + index));
      highlight($("#filters-" + (index + 1)), $("#filters-" + index));
      highlight($("#conversionaction-" + (index + 1)), $("#conversionaction-" + index));
      highlight($("#conversionwindow-" + (index + 1)), $("#conversionwindow-" + index));
      highlight($("#conversionsegment-" + (index + 1)), $("#conversionsegment-" + index));
      highlight($("#exitontriggerorfilternotmatched-" + (index + 1)), $("#exitontriggerorfilternotmatched-" + index));
      highlight($("#exitonconversionismatched-" + (index + 1)), $("#exitonconversionismatched-" + index));
      highlight($("#exitonlyaftermessage-" + (index + 1)), $("#exitonlyaftermessage-" + index));
    function highlight(newElem, oldElem){ 
        newElem.html(newElem.text().split('').map(function(val, i){
          return val != oldElem.text().charAt(i) ?
            "<span class='highlight-1'>"+val+"</span>" : 
            val;
        }).join(''));
      }
    }
    }
    else {
      document.getElementById('highlighter').textContent = "Refine Highlight"
      segmentcampaignchanges.forEach(removeClass);
      function removeClass() {
      var allElements = document.querySelectorAll(".highlight-1");
      for(i=0; i<allElements.length; i++) { 
        allElements[i].classList.add('highlight-2');
      }
    }
    };
  });
});

// Sticky highlight button
var elementPosition = $('#sticky').offset();
$(window).scroll(function(){
  if($(window).scrollTop() > elementPosition.top){
  $('#sticky').css('position','fixed').css('top','0');
  $('#sticky').css('background-color','#000').css('top','0');
  $('#sticky').css('padding','.5em').css('top','0');
  $('#sticky').css('border-bottom','2px solid #aaa').css('top','0');
  } else { 
  $('#sticky').css('position','static');
  $('#sticky').css('background-color','initial').css('top','0');
  $('#sticky').css('padding','initial').css('top','0');
  $('#sticky').css('border-bottom','initial').css('top','0');
  }
});
