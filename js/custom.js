// Menu Active End
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
// Menu Active End


// Header Scroll Start
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
// Header Scroll End


// Animated Headline Slider Start
var words = ['Front End Developer','Front End Developer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function (){
  wordflick();
});

// Animated Headline Slider End


// Scroll Slider mouse button Start
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000, 'linear');
});
// Scroll Slider mouse button End


// About Me Introduction End

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// About Me Introduction End

// Cursor Shape Start
// document.addEventListener("DOMContentLoaded", function(){

//   const cursorElement = document.createElement('div');
//   cursorElement.classList.add('custom-cursor');
//   document.body.appendChild(cursorElement);
//   document.body.classList.add('custom-cursor-active');
  
//   document.addEventListener('mousemove', e => {
//       cursorElement.setAttribute("style", "top: " + e.pageY + "px; left:" + e.pageX +"px;");
//   });
 
//   const customEventElements = document.querySelectorAll('[data-cursor-event="hover"]');

//   customEventElements.forEach(
//     function(customElement) {
//       let currentCustomElement = customElement;
//       customElement.addEventListener("mouseenter", e => {
//         cursorElement.classList.add(currentCustomElement.getAttribute('data-event-class'));
//       });
//       customElement.addEventListener("mouseout", e => {
//         cursorElement.classList.remove(currentCustomElement.getAttribute('data-event-class'));
//       });
//     }
//   );
  
//   document.addEventListener('click', () => {
//     cursorElement.classList.add("custom-cursor-click");

//     setTimeout(() => {
//       cursorElement.classList.remove("custom-cursor-click");
//     }, 500);
//   });
// });

// Cursor Shape End
