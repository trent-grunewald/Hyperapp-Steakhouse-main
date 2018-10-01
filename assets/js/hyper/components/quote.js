import {h, app} from 'hyperapp';


export default function Quote({state, actions}) {
  let currentQuote =_=>{
    return (
      <div>
          <h1 class="quote">{state.globalState.quotes[state.globalState.setQuote.currentQuote].quote}</h1>
          <h5 class="quote-author">{state.globalState.quotes[state.globalState.setQuote.currentQuote].author}</h5>
          <h5 class="quote-name">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo} <span class="quote2">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo2}</span></h5>
      </div>
    )
  }
  return (
    <section class="quote-body">
      <div class="container">
        <q lang="en"></q>
          {currentQuote()}
        {/* <h1 class="quote">I Love Cooking A Big Steak,<br/>For Myself and For My Cat.</h1>
        <h5 class="quote-author">- Tommy Tammisimo -</h5>
        <h5 class="quote-name">The lonely head chef <span class="quote2">- Over-Seasoned Steakhouse</span></h5> */}
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
