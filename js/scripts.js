// BI All Places
function AllPlaces(){
  this.places = {};
  this.currentId = 0;
}

AllPlaces.prototype.addPlace = function(place) {
  this.places[place.placeName] = place;
}

// BI Place (each)
function Place(placeName, countryName, seasonVisited, notes) {
  this.placeName = placeName;
  this.countryName = countryName;
  this.seasonVisited = seasonVisited;
  this.notes = notes;
}

Place.prototype.fullDescription = function() {
  console.log(" placeNm/countryNm: ", this.placeName, this.countryName);
  return this.placeName + ", " + this.countryName;
};

