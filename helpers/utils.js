// Utility functions commonly used by other files
export default {
  getCountryNameByCode(code, countries) {
    let i = 0
    for (i; i < countries.length; i++) {
      if (code === countries[i].code) {
        return countries[i].name
      }
    }
  },
  // Attach an event
  addEvent(obj, type, callback) {
    if (!obj) return // <-- Gives this function reusability from scripts that might not have the same DOM
    if (typeof obj._eventListeners === 'undefined') {
      obj._eventListeners = []
    }

    // Add the eventlistener to the DOM node
    if (obj == null || typeof obj === 'undefined') return
    if (obj.addEventListener) {
      obj.addEventListener(type, callback, false)
    } else if (obj.attachEvent) {
      obj.attachEvent('on' + type, callback)
    } else {
      obj['on' + type] = callback
    }

    const eventlisteners = obj._eventListeners
    eventlisteners.push({
      type,
      callback,
    })
    obj._eventListeners = eventlisteners
  },
  createUrlString(string) {
    if (!string) return

    string = string.trim()

    if (string.length > 0 && !string.match('^s*[a-zA-Z]+:/{0,2}')) {
      return 'https://' + string
    } else {
      return string
    }
  },
}
