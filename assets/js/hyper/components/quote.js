import {h, app} from 'hyperapp';


export default function Quote({state, actions}) {
  return (
    <section class="quote-body">
      <div class="container">
        <q lang="en"></q>
        <h1 class="quote">I Love Cooking A Big Steak,<br/>For Myself and For My Cat.</h1>
        <h5 class="quote-name">- Tommy Tammisimo -</h5>
        <h5 class="quote-name">The lonely head chef <span class="quote2">- Over-Seasoned Steakhouse</span></h5>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
