// Submit condition examples WIP
document.getElementById('condition-submit').addEventListener('click', function() {
  document.getElementById("condition-result").innerText = "";
  var optionSelected = document.getElementById("option-select").value;
  var option0 = "select an option...";
  var option1 = "Send a reminder 24 hours before a timestamp";
  var option2 = "Send a reminder 24 hours after a timestamp";
  var option3 = "Send a reminder 1 week before a timestamp";
  var option4 = "Send a reminder 1 week after a timestamp";
  var option0Condition = "Select an option";
  var option1Condition = "<h3>Condition 1: timestamp is between 24 hours from `now` and 48 hours from `now`</h3><ul><li>is a timestamp after a relative date of 1 day from `now`</li><li>is a timestamp before a relative date of 2 days from `now`</li></ul><h3>Condition 2: timestamp is between `now` and 24 hours from `now`</h3><ul><li>is a timestamp after a relative date of of `now`</li><li>is a timestamp before a relative date of 1 days from `now`</li></ul>";
  var option2Condition = "<h3>Condition 1: timestamp is between 24 hours ago and 48 hours ago</h3><ul><li>is a timestamp before a relative date of 1 day ago</li><li>is a timestamp after a relative date of 2 days ago</li></ul><h3>Condition 2: timestamp is between 24 hours ago and `now`</h3><ul><li>is a timestamp before a relative date of of `now`</li><li>is a timestamp after a relative date of 1 days ago</li></ul>";
  var option3Condition = "<h3>Conditions:</h3><ul><li>Is a timestamp after a relative date of of 7 day from `now`</li><li>is a timestamp before a relative date of of 8 days from `now`</li></ul>";
  var option4Condition = "<h3>Conditions:</h3><ul><li>Is a timestamp before a relative date of of 7 day ago</li><li>Is a timestamp after a relative date of of 8 days ago</li></ul>";
  if (optionSelected === option0) {
    document.getElementById("condition-result").innerHTML += option0Condition;
    } else if (optionSelected === option1) {
      document.getElementById("condition-result").innerHTML += option1Condition;
    } else if (optionSelected === option2) {
      document.getElementById("condition-result").innerHTML += option2Condition;
    } else if (optionSelected === option3) {
      document.getElementById("condition-result").innerHTML += option3Condition;
    }
    else if (optionSelected === option4) {
      document.getElementById("condition-result").innerHTML += option4Condition;
    }
      else {
    document.getElementById("condition-result").textContent = "";
  }
});