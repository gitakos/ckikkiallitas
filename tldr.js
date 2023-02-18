function toggleFullText(tldrId, fullTextId, buttonId) {
    var tldr = document.getElementById(tldrId);
    var fullText = document.getElementById(fullTextId);
    var button = document.getElementById(buttonId);
  
    if (tldr.style.display === "none") {
      fullText.style.transition = "none";
      tldr.style.transition = "none";
  
      tldr.style.opacity = "0";
      tldr.style.height = "0";
      tldr.style.overflow = "hidden";
      tldr.style.transition = "opacity 0.5s ease, height 0.5s ease";
      fullText.style.opacity = "0";
      fullText.style.height = "0";
      fullText.style.overflow = "hidden";
      fullText.style.transition = "opacity 0.5s ease, height 0.5s ease";
      button.innerHTML = "Hosszabban";
      setTimeout(function() {
        tldr.style.display = "block";
        fullText.style.display = "none";
        setTimeout(function() {
          tldr.style.opacity = "1";
          tldr.style.height = tldr.scrollHeight + "px";
          tldr.style.overflow = "hidden";
          fullText.style.height = null;
          fullText.style.opacity = null;
          fullText.style.overflow = null;
        }, 0);
      }, 500);
    } else {
      fullText.style.transition = "none";
      tldr.style.transition = "none";
  
      fullText.style.opacity = "0";
      fullText.style.height = "0";
      fullText.style.overflow = "hidden";
      fullText.style.transition = "opacity 0.5s ease, height 0.5s ease";
      tldr.style.opacity = "0";
      tldr.style.height = "0";
      tldr.style.overflow = "hidden";
      tldr.style.transition = "opacity 0.5s ease, height 0.5s ease";
      button.innerHTML = "Rövidebben";
      setTimeout(function() {
        fullText.style.display = "block";
        tldr.style.display = "none";
        setTimeout(function() {
          fullText.style.opacity = "1";
          fullText.style.height = fullText.scrollHeight + "px";
          fullText.style.overflow = "hidden";
          tldr.style.height = null;
          tldr.style.opacity = null;
          tldr.style.overflow = null;
        }, 0);
      }, 500);
    }
  }
  