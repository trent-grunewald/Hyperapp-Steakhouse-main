import {h, app} from 'hyperapp'

export default function Contact({state, actions}) {
  return (
    <section id="mapid" class="contact">
      <div class="container">
       <h5 class="contact-head">CONTACT US</h5>
       <h1 class="contact-title">COME ENJOY OUR MEAT!</h1>
        <div class="container contact-box">
          <div class="col-md-6 address">
            <h5 class="contact-location">Granger, <span>Texas</span></h5>
            <h5 class="contact-address">901 Co Rd 336, In the basement,<br></br> Granger, TX 76530</h5>
            <h5 class="contact-email">Email: <span>seasoned@overseasoned.com</span></h5>
            <h1 class="contact-underline">       </h1>
          </div>
          <div class="col-md-6 call">
            <h5 class="contact-call">Call for reservations:</h5>
            <h1 class="contact-number">(206)-643-0185</h1>
            <h5 class="contact-hours-title">Weekday Hours:</h5>
            <h5 class="contact-street">from 4pm-9pm<br></br>Call for reservations</h5>
            <h5 class="contact-hours-title">Weekend Hours:</h5>
            <h5 class="contact-street">from 3pm-10pm<br></br>Call for reservations</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
