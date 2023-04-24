import axios from "axios";

( async () => {
  async function getProducts() {
    const promise = await axios.get("https://api.escuelajs.co/api/v1/products")
    return promise.data;
  }

  const products = await getProducts();
  console.log(products);
})();

//Promesa con delay - explicacion
// function delay(time: number) {
//   const promise = new Promise<Boolean>((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   })
//   return promise;
// }
// const rta = await delay(3000);
// console.log(rta);