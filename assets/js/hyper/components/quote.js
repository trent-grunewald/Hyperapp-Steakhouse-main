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
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>