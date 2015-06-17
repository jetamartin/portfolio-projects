// $(document).ready(function() {
//   $("button#display").click(function() {
//     if ($("#display").text()=='Reset') {
//       $("p#demo").empty();
//       $("#display").text('Click Here');
//     } else {
//       var person = prompt("Please enter your name");
//       if (person != null) {
//           document.getElementById("demo").innerHTML =
//           "Hello " + person + "! Welcome to the world of HTML!";
//       }
//       $('#display').text('Reset');
//     }
//   });
// });
// Smooth scrolling script from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });
});
