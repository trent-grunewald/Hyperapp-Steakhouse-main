// NAV COLLAPSE
function navToggle() {
  const navs = document.querySelectorAll('.nav-item')
  const collapsed = document.querySelectorAll('.nav-collapse')
  
  navs.forEach(nav => nav.classList.replace('nav-item', 'nav-collapse'));
  collapsed.forEach(nav => nav.classList.replace('nav-collapse', 'nav-item'));
}

window.onload =_=>{
const butt = document.querySelector('.logo');
if(window.innerWidth <= 1000) {
  butt.addEventListener('click', navToggle)
  }
}

window.addEventListener("resize", () =>{
  const butt = document.querySelector('.logo');
if(window.innerWidth <= 1000) {
  butt.addEventListener('click', navToggle)
    } else {
      butt.removeEventListener('click', navToggle)
    }
  })



// https://medium.freecodecamp.org/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783
