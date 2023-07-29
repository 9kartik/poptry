console.log('hello from the other side');
window.performance.mark('hello_from_the_other_side');
setTimeout(() => {
  console.log('hello after some time')
  window.performance.mark('hello_after_some_time')
}, 20000);
