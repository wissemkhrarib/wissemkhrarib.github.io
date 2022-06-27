function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav col-12") {
      x.className += " responsive";
    } else {
      x.className = "top-nav col-12";
    }
  }