import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  create(dto: CreateProductDto): Product | Promise<Product>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  findOne(id: Product['id']): Product | Promise<Product | undefined> | undefined;
  getAllProducts(): Product[] | Promise<Product[]>;
}