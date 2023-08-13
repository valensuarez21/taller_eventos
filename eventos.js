document.getElementById("botonsaludar").addEventListener("click", function(event) {
    event.stopPropagation();
    alert('Hola!');
  });
  
  document.getElementById("soyeldiv").addEventListener("click", function() {
    alert('Hola soy el div!');
  });
  
    