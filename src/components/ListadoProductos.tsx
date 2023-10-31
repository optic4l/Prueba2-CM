import { IProduct } from "../App"

export default function ListadoProductos(props: IProduct){

    return (
        <div>
            <h1>{`Producto id ${props.id}`} </h1>
            <p>{`nombre: ${props.title}`}</p>
            <p><strong>{`precio: ${props.price}`} </strong></p>
        </div>
    )


}