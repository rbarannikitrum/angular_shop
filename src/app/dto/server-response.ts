import { Product } from './product.dto';

export interface ServerResponse {
  data: Array<Product>;
  count: number;
}
