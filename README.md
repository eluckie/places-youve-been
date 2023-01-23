# Places You've Been

#### By Aaron Demski, E Luckie, Vera Weikel

#### Places You've Been

## Technologies Used

* Javascript
* CSS
* HTML
* TDD

## Description

_Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object. Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code._

## Setup/Installation Requirements

* Copy repo to your desktop.
* Open index.html in your browser.


## TDD Tests
Describe Place(placeName, countryName, seasonVisited, notes);

Test 1: "It should create an object for each place visited that includes the name of the place, country, the season visited, and any notes."
Code: let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
testPlace;
Expected Output: 
Place {
  placeName: "Montana";
  countryName: "US";
  seasonVisited: "winter";
  notes: "EXTREMELY cold, subzero temperatures"
}

<!-- New function -->
Describe Place.prototype.fullDescription()

Test 1: "To print the full description to the console."
Code: let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
testPlace.fullDescription();
Expected Output: 
"Montana, US"

<!-- New function -->
Describe AllPlaces()

Test 1: "It should build an AllPlaces object housing ind'l Places."
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces;
Expected Output: allPlaces = "{}";

## Known Bugs

* _No known issues at this time_

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2023 Aaron Demski, E Luckie, Vera Weikel_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.