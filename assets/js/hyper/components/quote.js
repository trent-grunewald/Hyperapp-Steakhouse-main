import {h, app} from 'hyperapp';


export default function Quote({state, actions}) {

  let currentQuote = function(){
    return (
      <div>
          <h1 class="quote">{state.globalState.quotes[state.globalState.setQuote.currentQuote].quote}</h1>
          <h5 class="quote-author">{state.globalState.quotes[state.globalState.setQuote.currentQuote].author}</h5>
          <h5 class="quote-name">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo} <span class="quote2">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo2}</span></h5>
      </div>
    )
    
  }

  const leftArrow = setInterval(function() {
    if(state.globalState.setQuote.currentQuote === 0) {
      actions.test()
    } else {
      state.globalState.setQuote.currentQuote !== 0 
        actions.previousQuote()
    }
  },10000)

  return (
    <section class="quote-body">
      <div class="container">
        <q lang="en"></q>
          {currentQuote()}
          {leftArrow}
        {/* <h1 class="quote">I Love Cooking A Big Steak,<br/>For Myself and For My Cat.</h1>
        <h5 class="quote-author">- Tommy Tammisimo -</h5>
        <h5 class="quote-name">The lonely head chef <span class="quote2">- Over-Seasoned Steakhouse</span></h5> */}
        {/* <div class="arrows">
          <i onload={leftArrow} class={`fa fa-arrow-left ${(state.globalState.setQuote.currentQuote > 0) ? 'ready' : ''}`} aria-hidden="true"></i>
         <i onclick= {rightArrow} class={`fa fa-arrow-right ${(state.globalState.setQuote.currentQuote === (state.globalState.quotes.length - 1)) ? '' : 'ready'}`}  aria-hidden="true"></i>
         </div> */}
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
