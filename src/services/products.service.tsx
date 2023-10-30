import axios from "axios"


export const getProducts = async () =>{
    const response = axios.get('https://fakestoreapi.com/products')
    return response
}