import {h, app} from 'hyperapp'

export default function Contact({state, actions}) {
  return (
    <section class="contact">
      <div class="container">
       <h5 class="contact-head">CONTACT US</h5>
       <h1 class="contact-head">COME ENJOY OUR MEAT!</h1>
        <div class="contact-box">
          <div class="col-md-6 address">
            <h5 class="contact-location">Point Pleasant, West Virginia</h5>
            <h5 class="contact-address">400 Main St, Point Pleasant, WV 25550</h5>
            <h5 class="contact-street">400 Main St, Point Pleasant, WV 25550</h5>
          </div>
          <div class="col-md-6 call">
            <h5 class="contact-call">(206)-643-0185</h5>
            <h5 class="contact-hours-title">Weekday Hours:</h5>
            <h5 class="contact-street">from 4pm-9pm</h5>
            <h5 class="contact-hours-title">Weekend Hours:</h5>
            <h5 class="contact-street">from 3pm-10pm</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
