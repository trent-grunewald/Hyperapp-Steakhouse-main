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



  // var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g}', {
  //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox.streets',
  //     accessToken: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g'
  // }).addTo(mymap);
