

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

const nextSpecial = function (state, actions) {
  return (
    {
      setReview: {
      currentReview: state.globalState.setSpecial.currentSpecial ++ 
     }
    }
  )
}

const previousSpecial = function (state, actions) {
  return (
    {
      setReview: {
      currentReview: state.globalState.setSpecial.currentSpecial -- 
     }
    }
  )
}

export const actions = {
  nextReview,
  previousReview,
  nextSpecial,
  previousSpecial,

}