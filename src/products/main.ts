import {products, addProduct, calcStock} from './product.service';

addProduct({
  name: 'P1',
  createdat: new Date(1993, 12, 12),
  stock: 12,
  size: 'XL',
})

addProduct({
  name: 'P2',
  createdat: new Date(1993, 12, 12),
  stock: 11,
  size: 'M',
})

