export default {
  bind(el, bindings, vnode) {
    console.log('bind')
    // el.style.color = 'blue'

    const fontModifier = bindings.modifiers['font']
    if(fontModifier) {
      el.style.fontSize = '30px'
    }

    let delay = 0
    const delayModifier = bindings.modifiers['delay']
    if(delayModifier) {
      delay = 2000
    }

    setTimeout(() => {
        const arg = bindings.arg
        el.style[arg] = bindings.value
    }, delay)
  },
  inserted(el, bindings, vnode) {
    console.log('inserted')
  },
  update(el, bindings, vnode, oldVnode) {
    console.log('update')
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated')
  },
  unbind() {
    console.log('unbind')
  }
}
