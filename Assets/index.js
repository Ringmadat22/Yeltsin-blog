window.onscroll = function() {myFunction()};
//For the header element to be sticky or fixed
var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function()
{
    if(pageOffset >= 20)
    {
        document.getElementById('myBtn').style.visibility="visible"
    }else
    {
        document.getElementById('myBtn').style.visibility="hidden";
    }
};

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}