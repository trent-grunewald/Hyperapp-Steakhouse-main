import {h, app} from 'hyperapp'

export default function Modal({state, actions}) {
  return (
    <section id="modal" class="hidden">
    <div class="modal-overlay"></div>
      <div class="container modal-container">
        <div class="modal-body">
          <div class="modal-img"></div>
          <h1 class="modal-title">Receive 25% off!</h1>
          <h5 class="modal-description">Receive free coupons for our delicious resturaunt daily, when you surrender your email address below!</h5>
          <form id="email-form">
          <h5 class="email-validation"></h5>
          <input type="text" class="address-input" id="email" action="mailto:" placeholder="Email Address"></input>
          <input type="submit" id="modal-submit">Submit</input>
          </form>
          <a id="close-modal"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>