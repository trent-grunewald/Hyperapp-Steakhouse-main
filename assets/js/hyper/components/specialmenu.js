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

  return (
    <section class="specialMenu">
    <div class="container">
    <div class="row">
    <div class="special-top">
      <h5 class="special-head">SPECIAL MENU</h5>
      <h1 class="special-title">Delicious Flavour Of Spice</h1>
    </div>
      {loopMenu()}
      {/* <div class="col-md-4">
        <div class="card" style="width:100%">
        <div class="top-card">
          <img id="card1"/>
          <div class="light-circle"></div>
          <div class="special-price">$32</div>
          </div>
        <div class="container card-container">
          <p class="special-menu-title">Grilled NY Strip</p>
          <p class="special-menu-description">A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.</p>
        </div>
      </div>
     </div>
     
     <div class="col-md-4">
        <div class="card" style="width:100%">
        <div class="top-card">
          <img id="card3"/>
          <div class="light-circle"></div>
          <div class="special-price">{state.companyInfo.specialMenu}</div>
          </div>
        <div class="container card-container">
          <p class="special-menu-title">Charbroiled T-Bone</p>
          <p class="special-menu-description">A delicious 16oz Ribeye, dowsed in seasonsings, you will need water.</p>
        </div>
      </div>
     </div> */}
      </div>
      <a class="view-menu" href="#">VIEW FULL MENU</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
