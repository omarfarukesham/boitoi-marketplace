export interface IProduct {
    id: string;
    title: string;
    author: string;
    category: string;
    image: string;
    inStock: boolean;
    price: number;
    description: string;
    // Add other product properties
  }
  
  export interface IProductResponse {
    data: IProduct;
    // Add other response properties if any
  }