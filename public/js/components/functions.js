// NAV COLLAPSE
function navToggle() {
  const navs = document.querySelectorAll('.nav-item')
  const collapsed = document.querySelectorAll('.nav-collapse')
  
  //Targets the nav-item css class and replaces it with nav-collapse;
  navs.forEach(nav => nav.classList.replace('nav-item', 'nav-collapse'));
  //targets the nav-collapse css class and replaces it with nav-item;
  collapsed.forEach(nav => nav.classList.replace('nav-collapse', 'nav-item'));
}

//Windows size / resize function for NAV COLLAPSE
window.onload =_=>{
const butt = document.querySelector('.logo');
//checks the window size on load  
if(window.innerWidth <= 1000) {
  //adds the "Click" event listener to collapse menu if the page is less to or equal to 1000 px wide.
  butt.addEventListener('click', navToggle)
  } else {
    //if the window is not 1000 px wide, it adds an event listener to the window resize.
window.addEventListener("resize", () =>{
  //checks the window width on resize.
if(window.innerWidth <= 1000) {
  //adds "click" event listener to collapse menu at the right size
  butt.addEventListener('click', navToggle)
    } else {
      //removes "click" event listener from the collapse menu if the window is not 1000 px or less.
      butt.removeEventListener('click', navToggle)
      }
   })
  }
}



// https://medium.freecodecamp.org/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783
