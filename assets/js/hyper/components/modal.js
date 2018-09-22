import {h, app} from 'hyperapp'

export default function Modal({state, actions}) {
  return (
    <section id="modal" class="hidden">
    <div class="modal-overlay"></div>
      <div class="container modal-container">
        <div class="modal-body">
          <h1>Test</h1>
          <a id="close-modal">Close</a>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
