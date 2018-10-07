import {h, app} from 'hyperapp';


export default function Quote({state, actions}) {

  let currentQuote = function(){
    return (
      <div class="quoteHidden quoteBody">
          <h1 class="quote">{state.globalState.quotes[state.globalState.setQuote.currentQuote].quote}</h1>
          <h5 class="quote-author">{state.globalState.quotes[state.globalState.setQuote.currentQuote].author}</h5>
          <h5 class="quote-name">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo} <span class="quote2">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo2}</span></h5>
      </div>
    )
  }

  function test(){
    const quote = document.querySelector('.quoteBody')

    if(quote.classList.contains("quoteHidden")) {
    quote.classList.toggle("quoteTransition")
    } else {
    quote.classList.toggle("quoteHidden")
    };
  }
  // function test2(){
  //   const quote = document.querySelector('.quoteBody')

  //   if(quote.classList.contains("quoteTransition")) {
  //   quote.classList.replace("quoteHidden", "quoteTransition")
  //   const quoteReveal = document.querySelector('.quoteTransition')
  //   };

  const generateQuote = setTimeout(function() {
    if(state.globalState.setQuote.currentQuote !== 5) {
      actions.nextQuote()
      test()    
    } else {
      actions.previousQuote()
      test()
    }
  },10000);

  return (
    <section class="quote-body">
      <div class="container">
        <q lang="en"></q>
          {currentQuote()}
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
