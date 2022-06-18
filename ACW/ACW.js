elements = document.getElementsByClassName("Post")

function handleElement(element){
  newDiv = document.createElement("div");
  element.parentElement.appendChild(newDiv);
  newDiv.setAttribute("class", "PostOverlay");
  newDiv.setAttribute("style", "border-style: solid; border-color: #898989; border-width: 1px; border-radius: 2px;");
  newDiv.appendChild(element);
  element.setAttribute("style", "filter: blur(5px); pointer-events:none; padding-bot:-")
};

for(i in elements){
  handleElement(i)
};

function get elements_reddit(){
  list = document.getElementsByClassName("Post")
}
