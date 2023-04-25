import { ProductMemoryService } from './service/product-memory.service'

const productService = new ProductMemoryService();

//Create product
const newProduct = productService.create({
  title: 'Product 1',
  price: 100,
  description: 'bla bla',
  categoryId: 1,
  images: ['https://picsum.photos/200/300']
});
const products = productService.getAll();
console.log(productService.getAll());

const productId = products[0].id;
productService.updateProduct(productId, {
  title: 'Nombre nuevo'
});

const rta = productService.findOne(productId);
console.log(rta);