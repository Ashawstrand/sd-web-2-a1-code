"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  // fixed missing comma to seperate name and age
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

const brokenUsers = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

// users.forEach(user => console.log(user.name));

const list = document.getElementById("names-list");

users.forEach(user => {
  const li = document.createElement("li");
  li.textContent = user.name;
  list.appendChild(li);
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

const youngCharList = document.getElementById("young-characters-list");

const youngCharacters = users.filter(user => user.age < 40);

youngCharacters.forEach(user => {
  const li = document.createElement("li");
  li.textContent = user.name;
  youngCharList.appendChild(li);
});


// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

function renderNamesList(array, listId){
  const newNamesList = document.getElementById(listId);
  newNamesList.innerHTML = "";

  array.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    newNamesList.appendChild(li);
  });
}

renderNamesList(users, "function-list");

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

function renderAgeFilter(array, ageThreshold, listId) {
  const newAgeList = document.getElementById(listId);
  newAgeList.innerHTML = "";

  const filteredList = array.filter(item => item.age < ageThreshold);

  filteredList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    newAgeList.appendChild(li);
  });
}

renderAgeFilter(users, 40, "age-filter-list");


// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"


function renderNamesListError(array, listId, errorDivId){
  const newNamesList = document.getElementById(listId);
  const errorDiv = document.getElementById(errorDivId);
  newNamesList.innerHTML = "";
  errorDiv.innerHTML = "";

  array.forEach(item => {
    if (!item.name) {
      const errorMsg = `Error: Missing name property for character id # ${item.id}.`;
      console.error(errorMsg);

      const errorP = document.createElement("p");
      errorP.textContent = errorMsg;
      errorP.classList.add("error-message");
      errorDiv.appendChild(errorP);
      return;
    }

    const li = document.createElement("li");
    li.textContent = item.name;
    newNamesList.appendChild(li);

  });
}

renderNamesListError(brokenUsers, "error-handling-list", "error-messages");


// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"


function renderNamesListArrayError(array, listId, errorDivId){
  const newNamesList = document.getElementById(listId);
  const errorDiv = document.getElementById(errorDivId);
  newNamesList.innerHTML = "";
  errorDiv.innerHTML = "";

  array.forEach(item => {
    if (!item.name) {
      const errorMsg = `Error: Missing name property for character id # ${item.id}.`;
      console.error(errorMsg);

      const errorP = document.createElement("p");
      errorP.textContent = errorMsg;
      errorP.classList.add("error-message");
      errorDiv.appendChild(errorP);
      return;
    }

    const li = document.createElement("li");
    li.textContent = item.name;
    newNamesList.appendChild(li);

  });
}

renderNamesListArrayError(brokenUsers, "broken-array-list", "broken-array-errors");
