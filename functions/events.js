'use client'

export const events = {
   listen,
   showMsg: {
      success: (txt) => _emit('show-msg', { txt, type: 'success' }),
      error: (txt) => _emit('show-msg', { txt, type: 'error' }),
      warning: (txt) => _emit('show-msg', { txt, type: 'warning' }),
   }
}

function listen(eventName, listener) {

   const callListener = ({ detail }) => {
      listener(detail)
   }

   window.addEventListener(eventName, callListener)

   return () => {
      window.removeEventListener(eventName, callListener)
   }
}

function _emit(eventName, data) {
   window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}



