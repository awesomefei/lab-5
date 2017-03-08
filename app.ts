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

getProducts()
    .then((data) =>{
        console.log(data);
    })
    .catch((reason) =>{
        console.log(reason);
    })
