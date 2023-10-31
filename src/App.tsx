
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
  const [error, setError] = useState()


  useEffect(()=> {
      getData();
  },[])

  const getData = async () => {
    setLoading(true)
    try {
      const resp = (await getProducts()).data
      setProducts(resp.sort((a,b)=> a.price - b.price ))
    } catch (error) {
      setError(error);
    }finally{
      setLoading(false);
    }
  }

  const sortAsc = () => {
    const sortedProducts = [...products]; 
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }

  const sortDes = () => {
    const sortedProducts = [...products]; 
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  } 
  
  return (
    <>
      
      {error ? <Error error={error}/> : isLoading ? <Loading/> : (
       <>
        <div>
          <button onClick={sortAsc}>Ordenar Ascendente</button>
          <button onClick={sortDes}>Ordenar Descendente</button>
       </div>
       <ul>
        {
          products?.map(({id, title, price})=>(
            <li key={id}>
              <ListadoProductos id={id} title={title} price={price}/>
            </li>
            )
          )
        }
       </ul>
        
          
       </> 
        )}
      
    </>
  )
}

export default App
