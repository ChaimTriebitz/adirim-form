import { useEffect, useState } from 'react'
import { svgs } from '../assets'
import { events } from '../functions'


export const Msg = () => {

   const [msg, setMsg] = useState(null)
   const [isHidden, setIsHidden] = useState(true)

   useEffect(() => {
      let removeEvent = events.listen('show-msg', (msg) => {
         setMsg(msg)
         setIsHidden(false)
         hideMsg(5000)
      })
      return () => {
         removeEvent()
      }
   }, [])

   const hideMsg = (delay) => {
      setTimeout(() => {
         setIsHidden(true)
      }, delay)
      setTimeout(() => {
         setMsg(null)
      }, delay + 1000)
   }

   const getIcon = () => {
      switch (msg?.type) {
         case 'success': return svgs.check || '✅'
         case 'warning': return svgs.exclamation || '!'
         default: return ''
      }
   }

   return (
      <div className={`msg ${msg ? 'show' : ''} ${isHidden ? 'hide' : ''} ${msg ? msg.type : ''}`}>
         <span>{getIcon()}</span>
         <h5>{msg ? msg.txt : ''}</h5>
         {/* <button className="close-btn" onClick={() => hideMsg(0)}>{svgs.clear || '❌'}</button> */}
      </div>
   )
}
