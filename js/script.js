//Set our current year in copyright section
const yearEl = document.querySelector('.year');
const currYear = new Date().getFullYear();
yearEl.textContent=currYear;



// SHow hide Mobile nav//////////////////////////////////
const btnNav= document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

//what toggle does is it checks the class list
//if it contains nav-open it removes it if it doesnt
//then it adds it to it
btnNav.addEventListener('click' , function(){
    header.classList.toggle('nav-open')
}) ;


//Smooth scrolling/////////////////////////////////////
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e){
       e.preventDefault();
       const href = link.getAttribute('href');

       //Scroll back to top
       if( href === '#')
       window.scrollTo({
           top: 0,
           behavior: "smooth"
       });

       //Scroll to sections
       if(href !== '#' && href.startsWith('#')){
       const sectionEl = document.querySelector(href);
       sectionEl.scrollIntoView({
           behavior: "smooth"
       });
       }

       //Close mobile nav once scrolled
       if(link.classList.contains('main-nav-link'))
       header.classList.toggle('nav-open');
    });
});

//Sticky navigation/////////////////////////////////

$(document).ready(function() {
    $('.section-features').waypoint(function(direction){
        if(direction == "down") {
            $('.header').addClass('sticky');
        }else {
            $('.header').removeClass('sticky');
        }
    }, {
        offset: '95px;'
    });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
