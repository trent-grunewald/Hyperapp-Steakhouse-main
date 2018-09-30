import {h, app} from 'hyperapp'

export default function Reservations({state, actions}) {
  return (
    <section id="reservation" class="hidden">
    <div class="reservation-overlay"></div>
      <div class="container reservation-container">
        <div class="reservation-body">
          <div class="reservation-img"></div>
          <h1 class="reservation-title">Receive 25% off!</h1>
          <h5 class="reservation-description">Receive free coupons for our delicious resturaunt daily, when you surrender your email address below!</h5>
          <form id="contact-form">
          <h5 class="email-validation"></h5>
          <input type="text" class="name" placeholder="Name" disabled/>
          <input type="text" class="last" placeholder="Last" disabled/>
          <input type="number" class="telephone" placeholder="Phone" disabled/>
          <input type="text" class="address-input" action="mailto:" placeholder="Email Address"></input>
          <input type="submit" id="reservation-submit">Submit</input>
          </form>
          <a id="close-modal"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
