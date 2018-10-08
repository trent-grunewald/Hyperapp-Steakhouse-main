import {h, app} from 'hyperapp';


export default function Quote({state, actions}) {

  let currentQuote = function(){
    return (
      <div class="quoteHidden">
          <h1 class="quote">{state.globalState.quotes[state.globalState.setQuote.currentQuote].quote}</h1>
          <h5 class="quote-author">{state.globalState.quotes[state.globalState.setQuote.currentQuote].author}</h5>
          <h5 class="quote-name">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo} <span class="quote2">{state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo2}</span></h5>
      </div>
    )
  }

  //   if(quote.classList.contains("quoteTransition")) {
  //   quote.classList.replace("quoteHidden", "quoteTransition")
  //   const quoteReveal = document.querySelector('.quoteTransition')
  //   };
  const showQuote = setTimeout(function(){
    const quoteHide = document.querySelector('.quoteHidden')
    quoteHide.classList.replace("quoteHidden", "quoteTransition")
  },100);


 

  const generateQuote = setTimeout(function() {
    if(state.globalState.setQuote.currentQuote !== 5 ) {
      actions.nextQuote() 
    } else {
      actions.previousQuote()
    }
},10000);
const hideQuote = setTimeout(function(){
  const quoteShow = document.querySelector('.quoteTransition')
  quoteShow.classList.replace("quoteTransition", "quoteHidden")
},7000);
//  const timeout2 = setTimeout(function () {
//    const hidden = document.queryCommandEnabled("quoteTransition")
//   hidden.removeClass('quoteTransition');
// }, 500)

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
