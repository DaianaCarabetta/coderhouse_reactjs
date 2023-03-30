import axios from "axios";

const getProducts = async(category) => {
  const products = await axios.get('https://api.jsonbin.io/v3/b/642498b7ace6f33a22fffd9f?meta=false').then((res) => res.data)
  if(category){
    return products.filter((product) => product.category === category);
  }else{
    return products;
  }
}

const getProduct = async(id) => {
    return (await getProducts()).find((product) => product.id === id);
}

export { getProduct, getProducts }