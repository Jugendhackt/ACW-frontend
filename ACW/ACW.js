function start_observer(){
  const targetNode = document.getElementsByClassName("Post")[0].parentElement;
  const config = { attributes: true, childList: true,};
  const callback = function(mutationList, observer) {
      for(const mutation of mutationList) {
          if (mutation.type === 'childList') {
            elements = document.getElementsByClassName("Post");
            for(i in elements){
              setTimeout(handleElement(mutation.target), 100);
            }
          }
      }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

function handleElement(element){
  try {
    if (!(element.parentElement.classList.contains("DoNotWatch"))){
    newDiv = document.createElement("div");
    element.parentElement.appendChild(newDiv);
    newDiv.setAttribute("class", "PostOverlay DoNotWatch");
    newDiv.setAttribute("style", "border-style: solid; border-color: #898989; border-width: 1px; border-radius: 2px;");
    newDiv.appendChild(element);
    element.setAttribute("style", "filter: blur(10px); pointer-events:none; padding-bot:-10px")
  }
  } catch (e) {

  } finally {

  }
};

function get_elements_reddit(){
  start_observer()
  elements = document.getElementsByClassName("Post");
  for(i in elements){
    setTimeout(handleElement(elements[i]), 100);
  }
}

addEventListener("DOMContendLoaded",get_elements_reddit());
