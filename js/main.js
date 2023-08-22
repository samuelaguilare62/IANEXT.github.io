hamburger = document.querySelector(".hamburger")
hamburger.onclick = function(){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}

document.addEventListener('DOMContentLoaded', function() {
  var loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.classList.add('hidden');
});

/*document.getElementById("searchButton").addEventListener("click", function() {
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
*/

document.getElementById("searchButton").addEventListener("click", function() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var title = cards[i].getElementsByClassName("title-ia")[0].innerText.toLowerCase();

    if (title.includes(searchInput)) {
      cards[i].classList.remove("hidden"); // Show the card
    } else {
      cards[i].classList.add("hidden"); // Hide the card
    }
  }
});


(function(d, t, e, m){
    
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
                
        RW.init({
            huid: "492869",
            uid: "10a99a7e98023a2c5f5387bdf5430cdb",
            options: { "style": "oxygen" } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
        l = d.location, ck = "Y" + t.getFullYear() + 
        "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), "script", "rating-widget.com/"));