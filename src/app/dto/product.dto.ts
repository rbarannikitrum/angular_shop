export interface Product {
  brand: { icon?: string; id?: string; name: string };
  codeFrom1C?: string;
  id: string;
  images?: Array<string>;
  isReady?: boolean;
  isRetailAllowed?: boolean;
  name: string;
  nameFrom1C?: string;
  price: number;
  volume: string;
}
