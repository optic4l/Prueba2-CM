
import './App.css'
import ListadoProductos from './components/ListadoProductos'
import { useState, useEffect } from 'react';
import { getProducts } from './services/products.service';
import Loading from './components/Loading';
import Error from './components/Error';

export interface IProduct {
  id: number
  title: string
  price: number
}

function App() {
  const [products, setProducts] = useState<IProduct[]>();
  const [isLoading, setLoading] = useState(true)


  useEffect(()=> {
      getData();
  },[])

  const getData = async () => {
    setLoading(true)
    try {
      const resp = (await getProducts()).data
      setProducts(resp)
    } catch (error) {
      <Error error={error}/>
    }finally{
      setLoading(false);
    }
  }

  const sortAsc = () => {
    products?.sort((a, b)=> a.price - b.price)
  }

  const sortDes = () => {
    products?.sort((a, b)=> b.price - a.price)
  } 
  
  return (
    <>
    {sortDes()}
      {isLoading ? <Loading/> : (
        products?.map(({id, title, price})=>{
          return(
            <ListadoProductos id={id} title={title} price={price}/>
          )
        })
      )}
      
    </>
  )
}

export default App
