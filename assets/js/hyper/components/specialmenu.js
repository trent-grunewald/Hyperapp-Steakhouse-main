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
        <img id="card1"/>
        <h3 class="special-price">$32</h3>
        <p class="special-menu-title">Pressure Grilled NY Strip</p>
        <p class="special-menu-description">Barely 9oz served with half an asparagus and 1/16 of a potato.</p>
      </div>
      <div class="col-md-4">
        <img id="card2"/>
        <h3 class="special-price">$32</h3>
        <p class="special-menu-title">Pressure Grilled NY Strip</p>
        <p class="special-menu-description">Barely 9oz served with half an asparagus and 1/16 of a potato.</p>
      </div>
      <div class="col-md-4">
        <img id="card3"/>
        <h3 class="special-price">$32</h3>
        <p class="special-menu-title">Pressure Grilled NY Strip</p>
        <p class="special-menu-description">Barely 9oz served with half an asparagus and 1/16 of a potato.</p>
      </div>
      </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
