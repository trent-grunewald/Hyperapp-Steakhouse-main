import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section class="review">
      <div class="container">
       <div class="col-md-6 chef"></div>
       <div class="col-md-6 review-body">
        <h5 class="review-head">REVIEW</h5>
        <h1 class="review-title">What Nobody Say's About Us</h1>
        <h5 class="review-quote">“Way too many spices, I threw up!”</h5>
        <p class="review-quote-body">There was so much damn pepper on my steak that it was actually spicy! My fiance and I didn't finish our meals and the amount of "side" you get with your meal is laughable... We were still hungry after, so we went to McDonalds. Terrible honeymoon dinner.</p>
        <h5 class="reviewer">Jack Torrance - <span class="quote2">Overlook Hotel employee</span></h5>
        <div class="arrows"></div>
       </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
