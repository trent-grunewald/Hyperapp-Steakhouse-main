import {h, app} from 'hyperapp'
import Header from './header.js'
import TopImg from './topimg.js'
import OurStory from './ourstory.js'
import SpecialMenu from './specialmenu.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions}/>
      <TopImg state={state} actions={actions}/>
      <OurStory state={state} actions={actions}/>
      <SpecialMenu state={state} actions={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
