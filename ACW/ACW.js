document.body.setAttribute("style", "filter:blur(20px);");
function handleElement(element) {
  try {
    if (!element.parentElement.classList.contains("DoNotWatch")) {
      newDiv = document.createElement("div");
      element.parentElement.appendChild(newDiv);
      newDiv.setAttribute("class", "PostOverlay DoNotWatch");
      newDiv.setAttribute(
        "style",
        "border-style: solid; border-color: #898989; border-width: 1px; border-radius: 2px; display: flex; justify-content: center; align-items: center;"
      );
      newDiv.appendChild(element);
      warningText = document.createElement("h6");
      warningText.innerHTML = "ACW: loading()\nClick to display";
      warningText.innerHTML = "ACW: " + "coming soon<br>Click to display";
      warningText.setAttribute(
        "style",
        "position: absolute; z-index: 999; flex: 0 0 120px; color: white; font-size: 35px; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;"
      );
      warningText.setAttribute("class", "textToDelete");
      element.parentElement.appendChild(warningText);
      element.setAttribute(
        "style",
        "filter: blur(10px); pointer-events:none; padding-bot:-10px"
      );
      newDiv.onclick = function () {
        console.log("miep");
        element.parentElement.removeAttribute("style");
        element.removeAttribute("style");
        element.parentElement
          .getElementsByClassName("textToDelete")[0]
          .remove();
      };
    }
  } catch (e) {
  } finally {
  }
}

function blurElements() {
  elements = document.getElementsByClassName("Post");
  for (i in elements) {
    handleElement(elements[i]);
  }
}

function getCategories() {
  // testing.
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://acw.ipv6.church/");

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => console.log(xhr.responseText);

  let data = `{
    "Id": 78912,
    "Customer": "Jason Sweet",
  }`;

  xhr.send(data);
}

function ACW() {
  setTimeout(function () {
    blurElements();
    setInterval(blurElements, 1000);
  }, 1000);
  setTimeout(function () {
    document.body.removeAttribute("style");
  }, 3000);
}

addEventListener("DOMContentLoaded", ACW());
