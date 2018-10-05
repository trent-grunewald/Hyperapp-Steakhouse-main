
const nextReview = function (state, actions) {
  return (
    {
      setReview: {
      currentReview: state.globalState.setReview.currentReview ++ 
     }
    }
  )
}

const previousReview = function (state, actions) {
  return (
    {
      setReview: {
      currentReview: state.globalState.setReview.currentReview -- 
     }
    }
  )
}

 
// const nextQuote = function (state, actions) {
//   return (
//     {
//       setQuote: {
//       currentQuote: state.globalState.setQuote.currentQuote ++ 
//      }
//     }
//   )
// const previousQuote = function (state, actions) {
//   return (
//     {
//       setQuote: {
//       currentQuote: state.globalState.setQuote.currentQuote -- 
//      }
//     }
//   )
// }

export const actions = {
  nextReview,
  previousReview,
}


