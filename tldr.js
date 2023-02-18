function toggleFullText(tldrId, fullTextId) {
    var tldr = document.getElementById(tldrId);
    var fullText = document.getElementById(fullTextId);

    if (tldr.style.display === "none") {
      tldr.style.display = "block";
      fullText.style.display = "none";
    } else {
      tldr.style.display = "none";
      fullText.style.display = "block";
    }
}


