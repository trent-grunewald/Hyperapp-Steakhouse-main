import {h, app} from 'hyperapp';
import ourStory from './ourstory';


export default function Header({state, actions}) {
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
window.addEventListener("resize", () =>{
  const butt = document.querySelector('.logo');
if(window.innerWidth <= 1000) {
  butt.addEventListener('click', navToggle)
    } else {
      butt.removeEventListener('click', navToggle)
    }
  })
}


  return (
    <header>
      {
        <div class="container">
          <nav class="nav">
            <div class="logo"></div>
            <a href="#menu" class="nav-item nav-box">Menu</a>
            <a href="#ourStory" class="nav-item nav-box">Our Story</a>
            <a href="#" class="nav-item nav-box">Private Events</a>
            <a href="#" class="nav-item nav-box">Locations</a>
            <a href="#reservations" class="nav-item nav-box reservations">Reservations <i class="fa fa-angle-right"></i></a>
        </nav>
      </div>
      }
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
