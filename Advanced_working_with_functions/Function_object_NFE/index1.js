// Node-friendly shims for browser functions (confirm, alert).
// These allow the example to run under Node without a browser.
if (typeof confirm === 'undefined') {
  global.confirm = (q) => {
    console.log(`[confirm] ${q} -> default: true`);
    return true;
  };
}
if (typeof alert === 'undefined') {
  global.alert = (...args) => {
    console.log('[alert]', ...args);
  };
}

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => alert('You said yes'), result => alert(result));