export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Product = {
  name: string,
  createdat: Date,
  stock: number,
  size?: Sizes | undefined,
}



