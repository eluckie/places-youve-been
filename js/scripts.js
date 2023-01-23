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