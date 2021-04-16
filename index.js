//cuando alguien pulsa el boton abre y cierra la lista
function myFunction() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  
  // cerrar la lista si se clica fuera de ella
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 