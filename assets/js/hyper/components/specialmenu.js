import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section class="specialMenu">
    <div class="container">
    <div class="row">
    <div class="special-top">
      <h5 class="special-head">SPECIAL MENU</h5>
      <h1 class="special-title">Delicious Flavour Of Spice</h1>
    </div>
      <div class="col-md-4">
        <div class="card" style="width:100%">
        <div class="top-card">
          <img id="card1"/>
          <div class="light-circle"></div>
          <div class="special-price">$32</div>
          </div>
        <div class="container card-container">
          <p class="special-menu-title">Pressure Grilled NY Strip</p>
          <p class="special-menu-description">A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.</p>
        </div>
      </div>
     </div>
     <div class="col-md-4">
        <div class="card" style="width:100%">
        <div class="top-card">
          <img id="card2"/>
          <div class="light-circle"></div>
          <div class="special-price">$52</div>
          </div>
        <div class="container card-container">
          <p class="special-menu-title">Charbroiled T-Bone</p>
          <p class="special-menu-description">An over-charred T-Bone with leaves from a nearby tree sprinkled on top.</p>
        </div>
      </div>
     </div>
     <div class="col-md-4">
        <div class="card" style="width:100%">
        <div class="top-card">
          <img id="card3"/>
          <div class="light-circle"></div>
          <div class="special-price">$22</div>
          </div>
        <div class="container card-container">
          <p class="special-menu-title">Charbroiled T-Bone</p>
          <p class="special-menu-description">An over-charred T-Bone with leaves from a nearby tree sprinkled on top.</p>
        </div>
      </div>
     </div>
      </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
