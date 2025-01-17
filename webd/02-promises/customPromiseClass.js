class CustomPromise {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      // Promise class executing the wrapper function passed into the promise immediately
      this.resolve(); // executing the resolve function inside the wrapper function
    });
  }

  then(callback) {
    // then method that replaces the resolve with the callback function
    this.resolve = callback;
  }
}

// implementing promisified setTimeout()
function customPromisifiedSetTimeout(delay) {
  return new CustomPromise((resolve) => setTimeout(resolve, delay));
}

function callback() {
  console.log("The Delay's over!");
}

customPromisifiedSetTimeout(10000).then(callback);


