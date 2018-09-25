export const actions = {
  rightReview,
  // leftArrow
}

function rightReview (state, actions) {
  return (
    {
    setReview: {
      currentReview: state.globalState.currentReview +1
    }
    }
  )
}



