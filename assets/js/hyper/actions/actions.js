const clickFlip = function(){
  const test2 = document.querySelectorAll('.card');

  for (var i = 0; i < test2.length; i++) {
    test2[i].addEventListener("click", function() {
      this.classList.toggle('flipped');
    });
  }
};

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