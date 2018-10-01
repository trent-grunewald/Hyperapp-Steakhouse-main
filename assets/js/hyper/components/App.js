import {h, app} from 'hyperapp'
import Modal from './modal.js'
import Header from './header.js'
// import Reservations from './reservations.js'
import TopImg from './topimg.js'
import OurStory from './ourstory.js'
import SpecialMenu from './specialmenu.js'
import Quote from './quote.js'
import Reviews from './reviews.js'
import Promotions from './promotions.js'
import Contact from './contact.js'


export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Modal state={state} actions={actions}/>
      <Header state={state} actions={actions}/>
      {/* <Reservations state={state} actions={actions}/> */}
      <TopImg state={state} actions={actions}/>
      <OurStory state={state} actions={actions}/>
      <SpecialMenu state={state} actions={actions}/>
      <Quote state={state} actions={actions}/>
      <Reviews state={state} actions={actions}/>
      <Promotions state={state} actions={actions}/>
      <Contact state={state} actions={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>