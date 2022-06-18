function start_observer(){
  const targetNode = document.getElementsByClassName("Post")[0].parentElement;
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationList, observer) {
      for(const mutation of mutationList) {
          if (mutation.type === 'childList') {
            console.log(mutation.target)
    setTimeout(handleElement(mutation.target), 100);
          }
      }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

function handleElement(element){
  newDiv = document.createElement("div");
  element.parentElement.appendChild(newDiv);
  newDiv.setAttribute("class", "PostOverlay");
  newDiv.setAttribute("style", "border-style: solid; border-color: #898989; border-width: 1px; border-radius: 2px;");
  newDiv.appendChild(element);
  element.setAttribute("style", "filter: blur(5px); pointer-events:none; padding-bot:-10px")
};

function get_elements_reddit(){
  start_observer()
  elements = document.getElementsByClassName("Post");
  for(i in elements){
    setTimeout(handleElement(elements[i]), 100);
  }
}

addEventListener("DOMContendLoaded",get_elements_reddit());
