import {h, app} from 'hyperapp';


export default function Header({state, actions}) {
  return (
    <header>
      <div class="container">
      <nav class="nav-item">
        <a class="logo" href="#"></a>
        <a href="#">Menu</a>
        <a href="#">Our Story</a>
        <a href="#">Private Events</a>
        <a href="#">Locations</a>
        <a href="#" class="reservations">Reservations <i class="fas fa-angle-right"></i></a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
