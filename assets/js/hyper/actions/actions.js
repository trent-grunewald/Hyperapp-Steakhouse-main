//Cards flip on click
const clickFlip = function(){
  const card = document.querySelectorAll('.card');
  //For each card
  for (var i = 0; i < card.length; i++) {
    //add the click event listener
    card[i].addEventListener("click", function() {
      //toggle the class "Flipped" on the selected card
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