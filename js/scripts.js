// BI All Places
function AllPlaces(){
  this.places = {};
  this.currentId = 0;
}
AllPlaces.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
AllPlaces.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}
AllPlaces.prototype.findPlaceById = function(id){
  if (this.places[id] !== undefined){
    return this.places[id];
  }
  return false;
};
AllPlaces.prototype.deletePlaceById = function(id) {
    if (this.places[id] === undefined) {
      return false;
    }
    delete this.places[id];
    return true;
  };
// BI Place (each)
function Place(placeName, countryName, seasonVisited, notes) {
  this.placeName = placeName;
  this.countryName = countryName;
  this.seasonVisited = seasonVisited;
  this.notes = notes;
}

Place.prototype.fullDescription = function() {
  return this.placeName + ", " + this.countryName;
};

// User Interface Logic ---------
let allPlaces = new AllPlaces();

function handleFormSubmission(event) {
  event.preventDefault();
  const placeName = document.querySelector("input#new-place-name").value;
  const countryName = document.querySelector("input#new-country-name").value;
  const seasonVisited = document.querySelector("input#season-visited").value;
  const notes = document.querySelector("input#notes").value;
  let newPlace = new Place(placeName, countryName, seasonVisited, notes);
  allPlaces.addPlace(newPlace);
  console.log(allPlaces.places);
}

window.addEventListener("load", function (){
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);

});