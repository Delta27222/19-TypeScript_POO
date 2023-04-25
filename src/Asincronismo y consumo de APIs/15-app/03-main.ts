import { ProductHttpService } from './service/product-http.service';

(async () => {
  try {
    const productService = new ProductHttpService();
    console.log('---'.repeat(10));
    console.log('GetAll')
    const products = await productService.getAllProducts();
    console.log(products.map((item) => item.title));
  
    console.log('---'.repeat(10));
    console.log('Update')
    const  productId = products[0].id;
    await productService.update(productId, {
      title: 'Este es el nuevo titulo mi pana',
      price: 999
    })
  
    console.log('---'.repeat(10));
    console.log('FindOne')
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})();
