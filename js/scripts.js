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

