function toggleFullText(tldrId, fullTextId, buttonId) {
    var tldr = document.getElementById(tldrId);
    var fullText = document.getElementById(fullTextId);
    var button = document.getElementById(buttonId);
    tldr.style.overflow="hidden";
    fullText.style.overflow="hidden";
    tldr.style.height = tldr.scrollHeight + "px";
    fullText.style.height = fullText.scrollHeight + "px";
    tldr.style.transition = "opacity 0.5s ease, height 0.5s ease";
    fullText.style.transition = "opacity 0.5s ease, height 0.5s ease";



  
    if (tldr.style.display === "none") {
  
      tldr.style.opacity = "0";
      tldr.style.height = "0";
      fullText.style.opacity = "0";
      fullText.style.height = "0";
      button.innerHTML = "Mutass többet";
      setTimeout(function() {
        tldr.style.display = "block";
        fullText.style.display = "none";
        setTimeout(function() {
          tldr.style.opacity = "1";
          tldr.style.height = tldr.scrollHeight + "px";
        }, 0);
      }, 500);
    } else {
  
      fullText.style.opacity = "0";
      fullText.style.height = "0";
      tldr.style.opacity = "0";
      tldr.style.height = "0";
      button.innerHTML = "Kevesebb";
      setTimeout(function() {
        fullText.style.display = "block";
        tldr.style.display = "none";
        setTimeout(function() {
          fullText.style.opacity = "1";
          fullText.style.height = fullText.scrollHeight + "px";
        }, 0);
      }, 500);
    }
  }
  