var url = window.location.search;
var userID = url.split("=")[1];
console.log(userID)
$(function() {
  var suggestionsArray = [];
  var testArray = [];
  //   "9sports",
  //   "8shopping",
  //   "7music",
  //   "7animals",
  //   "6museum",
  //   "6movies",
  //   "5active",
  //   "4outdoor",
  //   "1comedy"
  // ]
  function displayResults() {
    if (suggestionsArray.length > 0){
      $("#name").append(suggestionsArray[0].name)
      $("#description").append(suggestionsArray[0].description);
      $("#link").prop("href", suggestionsArray[0].link)
      $(".link").attr("target", suggestionsArray[0].link)
      $("#IMG").attr("src", suggestionsArray[0].IMG);
    suggestionsArray.splice(0, 1);
    } else {
      netflixAndChill();
    }
  };
  function netflixAndChill() {
    $("#name").empty()  
    $("#description").empty()
    $("#IMG").empty()
    $("#link").empty()
    //empty everything and apologize for being unable to help
    let noResult = $("<p>");
      noResult.text("Sorry, we are unable to find a good event for you.  Maybe Netflix and Chill?");
      $(".netflix").append(noResult);
  }
  //This request gets all recommendations from the database,
  //THEN it compares them to the user's scores to sort the in order of appeal
  $.get("/api/users/" + userID, function (data){
    console.log("data", data);
    var result = data.scores.replace(/[{}":]+/g, "")
    testArray = result.split(',');
    $.get("/api/recommendations", function(res) {
      // console.log("res[0]" + res[0].name)
      for(var i = 0; i < testArray.length; i++) {
        for(var j = 0 ; j < res.length; j++) {
          if (testArray[i].substring(1) === res[j].category){
            suggestionsArray.push(res[j]);
          };
        };
      };
    }).then(
      function() {
      displayResults();
    });
  });

  $("#veto").on("click", function (event) {
    event.preventDefault();
    $("#name").empty()
    $("#description").empty()
    $("#IMG").empty()
    displayResults();
  });

});