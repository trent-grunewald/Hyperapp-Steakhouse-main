import {h, app} from 'hyperapp'
import { globalState } from '../state/globalState';

export default function SpecialMenu({state, actions}) {

  const loopMenu = function() {
    
    return state.globalState.specialMenu.map(function(item){
      return(
        <div class="col-md-4">
        <div class="card" style="width:100%">
        <div class="top-card">
          <img id={item.image}/>
          <div class="light-circle"></div>
          <div class="special-price">{item.price}</div>
          </div>
         <div class="container card-container">
          <p class="special-menu-title">{item.title}</p>
          <p class="special-menu-description">{item.description}</p>
        </div>
      </div>
     </div>
      )
    })
  }

  const leftSpecial = function() {
    if(state.globalState.setSpecial.currentSpecial !== 0) {
      actions.previousSpecial()
    }
  }

  const rightSpecial = function(){
    if(state.globalState.setSpecials.currentSpecial !== (state.globalState.specialMenu.length - 1)) {
      actions.nextSpecial()
    }
  }

  return (
    <section class="specialMenu">
    <div class="container">
    <div class="row special-row">
    <div class="special-top">
      <h5 class="special-head">SPECIAL MENU</h5>
      <h1 class="special-title">Delicious Flavour Of Spice</h1>
    </div>
    <i onclick={leftSpecial} class="fas fa-angle-left"></i>
      {loopMenu()}
           <i onclick={rightSpecial} class="fas fa-angle-right"></i>

      </div>
      <a class="view-menu" href="#">VIEW FULL MENU</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
