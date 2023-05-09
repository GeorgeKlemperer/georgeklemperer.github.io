const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("date").innerHTML = days[date.getDay()]+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();


// When the user scrolls down 200px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("scrollnavbar").style.top = "0";
  } else {
    document.getElementById("scrollnavbar").style.top = "-50px";
  }
}

  // When the user clicks on info button, open the popup
  function popupFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("reveal");
  }

  function popupFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("reveal");
  }

  function popupFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("reveal");
  }

  function popupFunction4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("reveal");
  }

  function popupFunction5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("reveal");
  }