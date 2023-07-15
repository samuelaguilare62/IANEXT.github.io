hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}

document.addEventListener('DOMContentLoaded', function() {
  var loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.classList.add('hidden');
});

document.getElementById("searchButton").addEventListener("click", function() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var cards = document.getElementsByClassName("card");

  // Iterar sobre todas las tarjetas y verificar si el título coincide con la búsqueda
  for (var i = 0; i < cards.length; i++) {
    var title = cards[i].getElementsByClassName("title-ia")[0].innerText.toLowerCase();

    if (title.includes(searchInput)) {
      // Mostrar la tarjeta si coincide con la búsqueda
      cards[i].style.display = "block";
    } else {
      // Ocultar la tarjeta si no coincide con la búsqueda
      cards[i].style.display = "none";
    }
  }
});