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
// ------------------------------------------------------------------------------------------
  // Code below attempted to dynamically change glyphicons used on web page separator
  // to avoid having to distinct CSS code for every separator (e.g., blog-separator, project-separator, etc)
  // Unfortunately I couldn't get this to work...this code displays the character string
  // for the blog glyphicon (i.e., e043) rather than the actual glyphicon. StackOverflow (http://stackoverflow.com/questions/5041494/manipulating-css-pseudo-elements-such-as-before-and-after-using-jquery?lq=1) from Blazemonger (#3) suggest it may only work for strings (maybe not hex values)
  // So I'm assuming i can't dynamically insert glyphicons.
// ------------------------------------------------------------------------------------------
  // var regExp = /\#([a-z]+)/;
  //
  //  $(".menu-items a").on('click', function () {
  //     var href = $(this).attr('href');
  //     var matches = regExp.exec(href);
  //     switch(matches[1]) {
  //       case "home":
  //         alert(href);
  //
  //         break;
  //       case "about":
  //         alert(href);
  //         break;
  //       case "projects":
  //         alert(href);
  //         break;
  //       case "blog":
  //         $('.separator-line').attr('data-content', '\e043');
  //         // $(this).attr('data-content', '\e043');
  //         // $(".separator-line::after.content").attr('glyphicon-code',"\e043");
  //         var separatorCode = $(this).attr('data-content', '\e043').val();
  //         alert(separatorCode);
  //         break;
  //       case "contact":
  //         alert(href)
  //         break;
  //     }
  //    });
// ------------------------------------------------------------------------------------------

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
