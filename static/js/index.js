/* Toggles between adding responsive class */
function toggleResponsive()
{
    var x = document.getElementById("navbar");
    if (x.className === "navbar")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "navbar";
    }
}

/* Smooth scrolling to sections of the web page */
document.querySelector('#about').scrollIntoView(
    {
        behavior: 'smooth'
    }
);

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });