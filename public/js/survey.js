var url = window.location.search;
var userID = url.split("=")[1];
$(function() {

  $("#survey-form").on("submit", function(event) {
    event.preventDefault();
    var newScoreArray = [
      $("[name=sportsVal]:checked").val(),
      $("[name=musicVal]:checked").val(),
      $("[name=comedyVal]:checked").val(),
      $("[name=museumVal]:checked").val(),
      $("[name=moviesVal]:checked").val(),
      $("[name=animalsVal]:checked").val(),
      $("[name=activeVal]:checked").val(),
      $("[name=outdoorsVal]:checked").val(),
      $("[name=shoppingVal]:checked").val().trim()];
    newScoreArray.sort();
    newScoreArray.reverse();
    console.log(userID)
    console.log(newScoreArray);
    $.ajax({
      type: "PUT",
      url: "/api/users/"+ userID,
      data : newScoreArray.toString()
    }).then(
      function() {
      window.location.replace("/results/?userID=" + userID);
      console.log("yo")
    });
  });
});