import {h, app} from 'hyperapp'

export default function Contact({state, actions}) {
  (setTimeout(() => {
    var mymap = L.map('map').setView([30.6928582,-97.4577975], 20);
    var marker = L.marker([30.6928582,-97.4577975]).addTo(mymap);
    marker.bindPopup("<b>Just park out front,</b><br>we will come get you.").openPopup();
    var circle = L.circle([30.6928582,-97.4577975], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
  }).addTo(mymap);
    
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Test?',
    maxZoom: 20,
    id: 'mapbox.streets',
    mapId: 'map',
    token:'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g',
    accessToken: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g'
  }).addTo(mymap);
  }, 3000))
  return (
    <section class="contact">
      <div class="container">
       <h5 class="contact-head">CONTACT US</h5>
       <h1 class="contact-title">COME ENJOY OUR MEAT!</h1>
        <div class="container contact-box">
          <div class="col-md-6">
            <h5 class="contact-location">Granger, <span>Texas</span></h5>
            <h5 class="contact-address">901 Co Rd 336, In the basement,<br></br> Granger, TX 76530</h5>
            <h5 class="contact-email">Email: <span>seasoned@overseasoned.com</span></h5>
            <h1 class="contact-underline">       </h1>
          </div>
          <div class="col-md-6">
            <h5 class="contact-call">Call for reservations:</h5>
            <h1 class="contact-number">(206)-643-0185</h1>
            <h5 class="contact-hours-title">Weekday Hours:</h5>
            <h5 class="contact-street">from 4pm-9pm<br></br>Call for reservations</h5>
            <h5 class="contact-hours-title">Weekend Hours:</h5>
            <h5 class="contact-street">from 3pm-10pm<br></br>Call for reservations</h5>
          </div>        
        </div>
        <div id="map"></div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
