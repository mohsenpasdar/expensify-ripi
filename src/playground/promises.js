const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'mohsen',
      age: 33
    });
    // reject('sth went wrong');
  }, 3000)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return 'some data'
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log(error);
});

console.log('after');
