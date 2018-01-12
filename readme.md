# capture-keys

Currently: Only `Cmnd+s` or `Ctrl+s` on macOS

# Installation
`npm i caputre-keys`

## Usage
In the browser.

```
const {cmndS} from 'capure-keys'

const preventOpeningOfSaveWindow = cmndS(evtobj => {
  evtobj.preventDefault()
  console.log('Do something', evtobj)
})

document.onkeydown = preventOpeningOfSaveWindow
//or
$(window).on('keydown', preventOpeningOfSaveWindow)
```