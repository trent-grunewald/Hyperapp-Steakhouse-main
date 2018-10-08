import {h, app} from 'hyperapp'

export default function Reservation({state, actions}) {
  
  setTimeout(function reserve(){

    const reserveEmail = document.querySelector('.address-input')
    const reservationSubmit = document.getElementById('reservation-submit')
    const emailWarning = document.getElementById('reserve-warning')
  
    //on modal submit
    reservationSubmit.onclick =_=> {
      //checks that the user input anything
      if(reserveEmail.value === ""){
        //
        emailWarning.style.color = 'red'
        //if not, alerts with red text to enter valid email
        emailWarning.innerHTML = "Please enter a valid email address"
      } else {
        //if they input something, removes the modal
        popup.style.display = 'none'
      }
    }
    //modal load delay
  },3000)

  return (
    <section id="reservations" class="hidden">
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
          <h5 id="reserve-warning"></h5>
          </form>
          <a id="close-reservation"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </section>
  )
 
  const userInput = document.querySelector('.address-input');
  const emailValidation = document.querySelector('.email-validation');

  //checks that the user input anything
  // if(userInput.value === ""){
  //   //if not, alerts with red text to enter valid email
  //   emailValidation.style.color = 'red';
  //   emailValidation.innerHTML = "Please enter a valid email"
  // } else {
  //   //if they input something, removes the modal
  //   popup.style.display = 'none'
  // }
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
