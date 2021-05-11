document.addEventListener('DOMContentLoaded', function() {

    
// TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
const menubutton = document.querySelector('.menu-button');
const menunav = document.querySelector('.toggle-nav');
menubutton.addEventListener('click', function () {
    if (menunav.getAttribute('data-navstate') === 'open')  {
        menunav.setAttribute('data-navstate' , 'closed');
    } else {
        menunav.setAttribute('data-navstate', 'open');
    };

});

   // STICKY NAV - CLOSE THE NAV ON STICKY HEADER NAV LINK CLICKS 
   const stickynavlinks = document.querySelectorAll(".sticky nav a");
   for (var i = 0; i < stickynavlinks.length; i++) {
       stickynavlinks[i].addEventListener('click', function () {
           menunav.setAttribute('data-navstate', 'closed');
       });
   };

});

// AUDIO PLAYER
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");
button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    } else {
        audio.pause();
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
    button.classList.add("fade");
});

// SCROLL ANIMATION //
const myobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-sectionstate', 'active');
        } else {
            entry.target.setAttribute('data-sectionstate', 'inactive');
        }
    });
});
document.querySelectorAll('section').forEach( (section) => {
    myobserver.observe(section);
});



