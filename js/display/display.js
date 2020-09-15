const Display = (() => {

  /**
   * Give element power to control the button.
   */
  const elemToCtrlBtn = (btn, elem) => {
    elem.addEventListener('input', (event) => {
      let elemLength = elem.value.length;
      if (elemLength > 0) {
        enableBtn(btn);    
      } else {
        disableBtn(btn);
      }
    })
  }

  const disableBtn = (btn) => {
    btn.disabled = true;
  } 

  const enableBtn = (btn) => {
    btn.disabled = false;
  }

  const isEmpty = (elem) => {
    if (elem.value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return {

  }
})();






