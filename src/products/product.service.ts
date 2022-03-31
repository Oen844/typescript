import {Product} from './product.model';

 export const products: Product[] = [];

 export const addProduct = (data: Product) => {
    products.push(data);
    console.log('products', products);
  }

  export const calcStock = (): number => {
    let total = 0;
    products.forEach((item) =>{
      total += item.stock;
    })
    return total;
  }
