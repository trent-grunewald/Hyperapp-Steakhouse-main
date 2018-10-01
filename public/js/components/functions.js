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
  } else {
    //if the window is not 1000 px wide, it adds an event listener to the window resize.
window.addEventListener("resize", () =>{
  //checks the window width on resize.
if(window.innerWidth <= 1000) {
  //adds "click" event listener to collapse menu at the right size
  butt.addEventListener('click', navToggle)
} else {
  butt.removeEventListener('click', navToggle)
    }
   })
  }

  // modal popup
setTimeout(function modalTest(){

  const popup = document.getElementById('modal')
  const userInputV = document.getElementById('email') 
  const emailValidation = document.querySelector('.email-validation')
  const closeIcon = document.getElementById('close-modal')
  const modalSubmit = document.getElementById('modal-submit')
  console.log(modalSubmit)

  //Targets the close icon in the bottom right of the modal.
  closeIcon.onclick =_=> {
    //on icon click, closes the modal (Display: none - scss)
  popup.style.display = 'none'
   }

  //replaces the modal scss display from none to show
  popup.classList.replace('hidden', 'show');

  //on modal submit
  modalSubmit.onclick =_=> {
    //checks that the user input anything
    if(userInputV.value === ""){
      //if not, alerts with red text to enter valid email
      emailValidation.style.color = 'red';
      emailValidation.innerHTML = "Please enter a valid email address"
    } else {
      //if they input something, removes the modal
      popup.style.display = 'none'
    }
  }
  //modal load delay
},1000)
// var mymap = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g'
// }).addTo(mymap);
