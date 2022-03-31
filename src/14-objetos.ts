(()=>{

  const login = (data : {email: string, password: number})=>{
    console.log('email', data.email);
    console.log('password', data.password);
  }
  // login('papau84@gmail.com', '123456');

  login({
    email: 'adeead@dasd.es',
    password: 123456,
  });

  const products: any[] = [];


  type Sizes ='S' | 'M' | 'L' | 'XL' | 'XXL' ;
  const addProduct = (data: {
    title: string,
    createdat: Date,
    stock: number,
    size?: Sizes | undefined,
  })=>{
    products.push(data);
    console.log('products', products);
  }

  addProduct({
    title: 'P1',
    createdat: new Date(1993,12,12),
    stock: 12,
    size: 'XL',
  })



})();
