$(function() {
  var url = window.location.search;
  var userID;
  if (url.indexOf("?user_id=") !== -1) {
    userID = url.split("=")[1];
    return userID;
  }
  var suggestionsArray = [];
  var testArray = [
    "9sports",
    "8shopping",
    "7music",
    "7animals",
    "6museum",
    "6movies",
    "5active",
    "4outdoor",
    "1comedy"
  ]
  function showSuggestions() {
    $("#suggestiondiv")
    console.log(suggestionsArray[0].name);
    console.log(suggestionsArray[0].description);
    console.log(suggestionsArray[0].IMG);
    console.log(suggestionsArray[0].link);
    suggestionsArray.splice(0, 1);
  }

  $.get("api/recommendations", function(res) {
    for(var i = 0; i < testArray.length; i++) {
      for(var j = 0 ; j < res.length; j++) {
        if (testArray[i].substring(1) === res[j].category){
          suggestionsArray.push(res[j]);
        };
      };
    };
    showSuggestions();
  });
});