//NAV COLLAPSE//
function navToggle() {
  const navs = document.querySelectorAll('.nav-item')

  navs.forEach(nav.classList.toggle('nav-collapsed'));
}

document.querySelector('.logo')
.addEventListener('click', navToggle);


// https://medium.freecodecamp.org/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783