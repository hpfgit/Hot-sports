function getElementStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr]
  } else if (element.currentStyle) {
    return element.currentStyle[attr]
  }
}

function addHandler(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, handler);
  } else {
    element['on' + type] = handler;
  }
}

function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, handler);
  } else {
    element['on' + type] = null;
  }
}

function getEvent(event) {
  return event ? event : window.event;
}

function getTarget(event) {
  return event.target || event.srcElement;
}

function preventDefault(event) {
  if (event.preventDefault) {
    event.preventDef();
  } else {
    event.returnValue = false;
  }
}

function stopPropagation(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelable = true;
  }
}

function getRelatedTarget(event) {
  if (event.relatedTarget) {
    return event.relatedTarget;
  } else if (event.toElement) {
    return event.toElement;
  } else if (event.fromElement) {
    return event.fromElement;
  } else {
    return null;
  }
}

function getButton(event) {
  if (document.implementation.hasFeature("MouseEvents", "2.0")) {
    return event.button;
  } else {
    switch (event.button) {
      case 0:
      case 1:
      case 3:
      case 5:
      case 7:
        return 0;
      case 2:
      case 6:
        return 2;
      case 4:
        return 1;
    }
  }
}

function getWheelDelta(event) {
  let driect = 0;
  var client = function () {
    var engine = {
      ie: 0,
      gecko: 0,
      webkit: 0,
      khtml: 0,
      opera: 0,
      ver: null
    };
    return {
      engine: engine
    };
  }();
  if (event.wheelDelta) {
    driect = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
  } else {
    driect = -event.detail * 40;
  }
  return (driect > 0 ? 1 : -1);
}

function getCharCode(event) {
  if (typeof event.charCode == "number") {
    return event.charCode;
  } else {
    return event.keyCode;
  }
}

export {
  getElementStyle,
  addHandler,
  removeEvent,
  getEvent,
  getButton,
  getTarget,
  getCharCode,
  getRelatedTarget,
  getWheelDelta,
  stopPropagation,
  preventDefault
}