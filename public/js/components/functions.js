// // NAV COLLAPSE
// window.onload =_=> {
//   const navs = document.querySelectorAll('.nav-item')
//   const collapsed = document.querySelectorAll('.nav-collapse')
  
//   //Targets the nav-item css class and replaces it with nav-collapse;
//   navs.forEach(nav => nav.classList.replace('nav-item', 'nav-collapse'));
//   //targets the nav-collapse css class and replaces it with nav-item;
//   collapsed.forEach(nav => nav.classList.replace('nav-collapse', 'nav-item'));

// //Windows size / resize function for NAV COLLAPSE

// const butt = document.querySelector('.logo');
// //checks the window size on load  
// if(window.innerWidth <= 1000) {
//   //adds the "Click" event listener to collapse menu if the page is less to or equal to 1000 px wide.
//   } else {
//     //if the window is not 1000 px wide, it adds an event listener to the window resize.
// window.addEventListener("resize", () =>{
//   //checks the window width on resize.
// if(window.innerWidth <= 1000) {
//   //adds "click" event listener to collapse menu at the right size
//   butt.addEventListener('click', navToggle)
// } else {
//   butt.removeEventListener('click', navToggle)
//     }
//    })
//   }
// }



// // var mymap = L.map('map').setView([51.505, -0.09], 13);

// // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g}', {
// //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //     maxZoom: 18,
// //     id: 'mapbox.streets',
// //     accessToken: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g'
// // }).addTo(mymap);