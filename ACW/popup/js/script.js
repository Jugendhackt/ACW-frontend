var categories = { food: false, animals: true };
// var deadDict = { die: ['"lonely"', '"with family"', '"with five cats"', ""] };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setHTML(keys, dict, int) {
  document.getElementById(keys[int]).textContent =
    dict[keys[int]][getRandomInt(dict[keys[int]].length)];
}

function addToHTML(dict, id, spaces, repeat) {
  var keys = Object.keys(dict);
  var elements = document.getElementById(id).children;
  for (var i in keys) {
    elements[i].innerHTML +=
      "<span class='green-text'>" +
      "&nbsp".repeat(spaces) +
      keys[i] +
      '</span><span class="white-text"></span>';

    if (dict[keys[i]].length > 0) {
      setHTML(keys, dict, i);
      setInterval(setHTML(keys, dict, i), repeat);
    }
  }
}

function saveSwitchState(dict, id) {
  var elements = document.getElementById(id).children;
  for (i in elements) {
    values = Object.values(dict);
    checkbox = document.getElementsByClassName("custom-control-input")[i];
    checkbox.checked = values[i];
  }
}

// function update(id) {
//   checkbox = document.getElementById(id);
//   boxes = document.getElementsByClassName("custom-control-input");
//   let index = 0;
//   for (let i in boxes) {
//     if (boxes[i].id == id) {
//       index = i;
//     }
//   }
//   categories[Object.keys(categories)[-1]] = checkbox.checked;
// }

function contentLoaded() {
  addToHTML(categories, "topics", 2, 200);
  saveSwitchState(categories, "topics");
  // addToHTML(deadDict, "dead", 0, 1900);
}

document.addEventListener("DOMContentLoaded", contentLoaded, false);
