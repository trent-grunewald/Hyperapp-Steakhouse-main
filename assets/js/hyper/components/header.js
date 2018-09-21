import {h, app} from 'hyperapp';
import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)


export default function Header({state, actions}) {
  return (
    <header>
      <div class="container">
      <nav class="nav">
        <a class="logo" href="#"></a>
        <a href="#" class="nav-item">Menu</a>
        <a href="#" class="nav-item">Our Story</a>
        <a href="#" class="nav-item">Private Events</a>
        <a href="#" class="nav-item">Locations</a>
        <a href="#" class="nav-item reservations">Reservations <i class="fas fa-angle-right"></i></a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
