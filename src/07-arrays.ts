(()=>{
  let prices= [1,2,2,1,1,212, 'Hola', true];
  // prices.push('asdas');
  // prices.push(true);
  // prices.push({name: 'John'});
  prices.push(1212121);
  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean| object)[] = [1, 'asdasd', true];
  mixed.push(1212121);
  mixed.push('asdasd');
  mixed.push(false);
  console.log('mixed', mixed);
  mixed.push({name: 'John'});
  console.log('mixed', mixed);
  mixed.push([1,2,3]);
  console.log('mixed', mixed);
  numbers.map(item => item *2);
  console.log('numbers', numbers);


}) ();
