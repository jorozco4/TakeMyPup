const inputElement = $("#major-cities");
const inputLocation = document.getElementById("major-cities");

//auto complete 25 major cities
$(function () {
  let majorCities = [
    "Atlanta, Georgia",
    "Austin, Texas",
    "Chicago, Illinois",
    "Dallas, Texas",
    "Denver, Colorado",
    "Las Vegas, Nevada",
    "Los Angeles, California",
    "Nashville, Tennessee",
    "New Orleans, Louisiana",
    "New York, New York",
    "Oklahoma City, Oklahoma",
    "Omaha, Nebraska",
    "Orlando, Florida",
    "Philadelphia, Pennsylvania",
    "Phoenix, Arizona",
    "Pittsburgh, Pennsylvania",
    "Raleigh, North Carolina",
    "Richmond, Virginia",
    "Salt Lake City, Utah",
    "San Antonio, Texas",
    "San Jose, California",
    "San Francisco, California",
    "Seattle, Washington",
    "Tampa, Florida",
    "Washington, District of Columbia",
  ];
  $("#major-cities").autocomplete({
    source: majorCities,
  });
});
