import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService  implements ProductService{
  private URL = "https://api.escuelajs.co/api/v1/products";

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.URL, dto);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.URL}/${id}`, changes);
    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.URL}/${id}`);
    return data;
  }
  async getAllProducts() {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }
}