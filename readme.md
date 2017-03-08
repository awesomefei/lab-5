# Lab 5
The following function named getProducts() returns a promise. If the promise succeeds then display the list of products in the console window. Otherwise, display the failure reason. You should be able to complete this task with a single line of code:

// this method returns products in 1 and 1/2 seconds
function getProducts() {
  return new Promise((resolve, reject) => {
    window.setTimeout(
      function() {
        if (Math.random() >= 0.5) {
          resolve(['Tesla', 'Apples', 'Oranges', 'Macbook Pro']);
        } else {
          reject('Network error!');
        }
      }, 1500
    );
  })
}