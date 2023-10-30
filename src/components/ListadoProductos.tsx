import { IProduct } from "../App"

export default function ListadoProductos(props: IProduct){

    return (
        <div>
            <h1>{`Producto ${props.id}`} </h1>
            <p>{`nombre: ${props.title}, precio: ${props.price}`}</p>
        </div>
    )


}