import axios from "axios";

const ballangAPI = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
})

export async function getProducts(){
  try{
  const response = await ballangAPI.get(`/products`)
  return response.data.result
  } catch(e){
    console.log(e);
  }
}

export async function getBrands(){
  try{
    const response = await ballangAPI.get(`/brands`);
    return response.data.result
  } catch(e){
    console.log(e);
  }
}

export async function getBrand(brandId:string){
  try{
    const response = await ballangAPI.get(`/brands/${brandId}`);
    return response.data.result.products
  } catch(e){
    console.log(e);
  }

}

export async function getProduct(productId:string){
  try{
    const response = await ballangAPI.get(`/products/${productId}`);
    return response.data.result.products
    
  } catch(e){
    console.log(e);
  }
}