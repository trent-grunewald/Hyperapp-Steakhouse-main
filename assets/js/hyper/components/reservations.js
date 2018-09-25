import {h, app} from 'hyperapp'

export default function Reservation({state, actions}) {

  return (
    <section id="reservations">
    <div class="reservation-overlay"></div>
      <div class="container reservation-container">
        <div class="reservation-body">
          <div class="reservation-logo"></div>
          <h1 class="reservation-title">All booked up</h1>
          <h5 class="reservation-description">Please try again tomorrow.</h5>
          <form id="email-form">
          <h5 class="email-validation"></h5>
          <input type="text" class="name" placeholder="Name" disabled/>
          <input type="text" class="last" placeholder="Last" disabled/>
          <input type="number" class="telephone" placeholder="Phone" disabled/>
          <input type="text" class="address-input" action="mailto:" placeholder="Email Address"></input>
          <input type="submit" id="reservation-submit">Submit</input>
          <h5 class="email-validation"></h5>
          </form>
          <a id="close-reservation"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
