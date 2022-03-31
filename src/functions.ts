(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  function createProductoJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    }
  }

  const product1 = createProductoJson('P1', new Date(), 12, 'XL');
  console.log('product1', product1);
  console.log('product1', product1.title);
  console.log('product1', product1.createdAt);
  console.log('product1', product1.stock);


  const createProductoJson2 (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes | undefined,
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    }

  }

  const product2 = createProductoJson2('P1', new Date(), 12);

})();
