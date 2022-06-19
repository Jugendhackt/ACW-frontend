/*function start_observer(){
  const targetNode = document.getElementsByClassName("Post")[0].parentElement;
  const config = { attributes: true, childList: true,};
  const callback = function(mutationList, observer) {
      for(const mutation of mutationList) {
          if (mutation.type === 'childList') {
            elements = document.getElementsByClassName("Post");
            for(i in elements){
              console.log(i.attributes)
            }
          }
      }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}*/

function handleElement(element){
  try {
    if (!(element.parentElement.classList.contains("DoNotWatch"))) {
      newDiv = document.createElement("div");
      element.parentElement.appendChild(newDiv);
      newDiv.setAttribute("class", "PostOverlay DoNotWatch");
      newDiv.setAttribute("style", "border-style: solid; border-color: #898989; border-width: 1px; border-radius: 2px; display: flex; justify-content: center; align-items: center;");
      newDiv.appendChild(element);


      newDiv.onmouseover = function() {
        testText = document.createElement("h6");
        testText.innerHTML = "This element was blurred by ACW.";
        testText.setAttribute("style", "position: absolute; z-index: 999; flex: 0 0 120px; color: white; font-size: 35px; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;");
        element.parentElement.appendChild(testText);
      }

      newDiv.onmouseout = function() {          
        try {  
          element.parentElement.removeChild(testText);
        } catch(e) { }
      }

      element.setAttribute("style", "filter: blur(10px); pointer-events:none; padding-bot:-10px")

    }
  } catch (e) {} finally {}
};

function doBlur() {
  blurElements();
}

function blurElements() {
  elements = document.getElementsByClassName("Post");
  for(i in elements){
    setTimeout(handleElement(elements[i]), 100);
  }
}

function ACW(){
  blurElements();
  setInterval(doBlur, 1000);
}

addEventListener("DOMContentLoaded", ACW());
