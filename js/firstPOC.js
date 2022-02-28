

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
  document.getElementById("filters-1").className = "highlight";
  };
if (filter1 != filter2) {
  document.getElementById("filters-2").className = "highlight";
  };
if (filter2 != filter3) {
  document.getElementById("filters-3").className = "highlight";
  };
if (filter3 != filter4) {
  document.getElementById("filters-4").className = "highlight";
  };
if (when0 != when1) {
  document.getElementById("when-1").className = "highlight";
  };
if (when1 != when2) {
  document.getElementById("when-2").className = "highlight";
  };
if (when2 != when3) {
  document.getElementById("when-3").className = "highlight";
  };
if (when3 != when4) {
  document.getElementById("when-4").className = "highlight";
  };
if (user0 != user1) {
  document.getElementById("user-1").className = "highlight";
  };
if (user1 != user2) {
  document.getElementById("user-2").className = "highlight";
  };
if (user2 != user3) {
  document.getElementById("user-3").className = "highlight";
  };
if (user3 != user4) {
  document.getElementById("user-4").className = "highlight";
  };
if (seggmenttrigger0 != seggmenttrigger1) {
  document.getElementById("segmenttrigger-1").className = "highlight";
  };
if (seggmenttrigger1 != seggmenttrigger2) {
  document.getElementById("segmenttrigger-2").className = "highlight";
  };
if (seggmenttrigger2 != seggmenttrigger3) {
  document.getElementById("segmenttrigger-3").className = "highlight";
  };
if (seggmenttrigger3 != seggmenttrigger4) {
  document.getElementById("segmenttrigger-4").className = "highlight";
  };
if (conversionaction0 != conversionaction1) {
  document.getElementById("conversionaction-1").className = "highlight";
  };
if (conversionaction1 != conversionaction2) {
  document.getElementById("conversionaction-2").className = "highlight";
  };
if (conversionaction2 != conversionaction3) {
  document.getElementById("conversionaction-3").className = "highlight";
  };
if (conversionaction3 != conversionaction4) {
  document.getElementById("conversionaction-4").className = "highlight";
  };
if (conversionwindow0 != conversionwindow1) {
  document.getElementById("conversionwindow-1").className = "highlight";
  };
if (conversionwindow1 != conversionwindow2) {
  document.getElementById("conversionwindow-2").className = "highlight";
  };
if (conversionwindow2 != conversionwindow3) {
  document.getElementById("conversionwindow-3").className = "highlight";
  };
if (conversionwindow3 != conversionwindow4) {
  document.getElementById("conversionwindow-4").className = "highlight";
  };
if (conversionsegment0 != conversionsegment1) {
  document.getElementById("conversionsegment-1").className = "highlight";
  };
if (conversionsegment1 != conversionsegment2) {
  document.getElementById("conversionsegment-2").className = "highlight";
  };
if (conversionsegment2 != conversionsegment3) {
  document.getElementById("conversionsegment-3").className = "highlight";
  };
if (conversionsegment3 != conversionsegment4) {
  document.getElementById("conversionsegment-4").className = "highlight";
  };
if (exitontriggerorfilternotmatched0 != exitontriggerorfilternotmatched1) {
  document.getElementById("exitontriggerorfilternotmatched-1").className = "highlight";
  };
if (exitontriggerorfilternotmatched1 != exitontriggerorfilternotmatched2) {
  document.getElementById("exitontriggerorfilternotmatched-2").className = "highlight";
  };
if (exitontriggerorfilternotmatched2 != exitontriggerorfilternotmatched3) {
  document.getElementById("exitontriggerorfilternotmatched-3").className = "highlight";
  };
if (exitontriggerorfilternotmatched3 != exitontriggerorfilternotmatched3) {
  document.getElementById("exitontriggerorfilternotmatched-4").className = "highlight";
  };
if (exitonconversionismatched0 != exitonconversionismatched1) {
  document.getElementById("exitonconversionismatched-1").className = "highlight";
  };
if (exitonconversionismatched1 != exitonconversionismatched2) {
  document.getElementById("exitonconversionismatched-2").className = "highlight";
  };
if (exitonconversionismatched2 != exitonconversionismatched3) {
  document.getElementById("exitonconversionismatched-2").className = "highlight";
  };
if (exitonconversionismatched3 != exitonconversionismatched4) {
  document.getElementById("exitonconversionismatched-2").className = "highlight";
  };
if (exitonlyaftermessage0 != exitonlyaftermessage1) {
  document.getElementById("exitonlyaftermessage-1").className = "highlight";
  };
if (exitonlyaftermessage1 != exitonlyaftermessage2) {
  document.getElementById("exitonlyaftermessage-2").className = "highlight";
  };
if (exitonlyaftermessage2 != exitonlyaftermessage3) {
  document.getElementById("exitonlyaftermessage-3").className = "highlight";
  };
if (exitonlyaftermessage3 != exitonlyaftermessage4) {
  document.getElementById("exitonlyaftermessage-4").className = "highlight";
  };
*/