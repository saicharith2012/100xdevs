let currentClock;

function searchBackend() {
  console.log("request sent to backend");
}

function debouncedSearchBackend() {
  // start a clock of 30ms when the function is called.
  // execute the searchBackend() at the end of the clock
  // if the function is called again during the clock time, restart the cloc
  // i.e., clear the old clock and create a new clock

  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend(); // runs only once.


// Output:
// request sent to backend