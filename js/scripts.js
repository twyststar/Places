//Business logic
function Place (name, country, attraction, food) {
  this.name = name;
  this.country = country;
  this.attraction = attraction;
  this.food = food;
}
Place.prototype.fullPlace = function() {
  return this.name + ", " + this.country;
}

//User interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedCountryName = $("input#new-country-name").val();
    var inputtedAttraction = $("input#new-attraction").val();
    var inputtedFood = $("input#new-food").val();

    var newPlace = new Place(inputtedPlaceName, inputtedCountryName, inputtedAttraction, inputtedFood);

    $("ul#place").append("<li><span class = 'place'>" + newPlace.fullPlace() + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-country-name").val("");
    $("input#new-attraction").val("");
    $("input#new-food").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.fullPlace());
      $(".place-name").text(newPlace.name);
      $(".country-name").text(newPlace.country);
      $(".new-attraction").text(newPlace.attraction);
      $(".new-food").text(newPlace.food);
    });
  });
});
