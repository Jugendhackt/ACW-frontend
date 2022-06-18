function handleElement(element){
  newDiv = document.createElement("div");
  element.parentElement.appendChild(newDiv);
  newDiv.setAttribute("class", "PostOverlay");
  newDiv.setAttribute("style", "border-style: solid; border-color: #898989; border-width: 1px; border-radius: 2px;");
  newDiv.appendChild(element);
  element.setAttribute("style", "filter: blur(5px); pointer-events:none; padding-bot:-")
};

function get_elements_reddit(){
  elements = document.getElementsByClassName("Post")
  for(i in elements){
    handleElement(i)
  }
}

window.addEventListener("DOMContendLoaded",get_elements_reddit())
