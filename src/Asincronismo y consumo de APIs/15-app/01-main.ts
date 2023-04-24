import axios from "axios";
import { Product } from '../15-app/models/product.model'

( async () => {                         //Aca indicamos que la respuesta en linea 12 sera un Array de productos
                                        //Ahora automaticamente, la estructura recibida usara los modelos creados en models
  async function getProducts() : Promise<Product[]> {
                                    //Aca indicamos que la respuesta en linea 8 sera un Array de productos
    const { data } = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products")
    // data.map((item) => console.log(`${item.id}`))  Si se le coloca el axios.get<Product[]> ahora podemos hacer cosas con el data
                                                      //Ver la otra manera en el NOTION
    return data;
  }
                                                            //Mas que todo es por buenas practicas, y que es mas seguro de recibir lo que se espera
  const products = await getProducts();
  console.log(products.map(item => `${item.id} -> ${item.title}`));
})();