(() => {

  type Product = {
    title: string,
    createdat: Date,
    stock: number,
    size?: Sizes | undefined,
  }
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
    console.log('products', products);
  }

  addProduct({
    title: 'P1',
    createdat: new Date(1993, 12, 12),
    stock: 12,
    size: 'XL',
  })

  let product2 : Product =
    {
      title: 'P2',
      createdat: new Date(1995, 12, 12),
      stock: 12,
      size: 'XL',
    }

    products.push(product2);
    console.log('products', products);




})();
