
export const cmndS = fn => e => {
      const evtobj = window.event? event : e
      if (evtobj.keyCode == 83 && (evtobj.ctrlKey || evtobj.metaKey)) {
        fn(evtobj)
      }
}
