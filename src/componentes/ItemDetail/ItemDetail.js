import { producto } from "../utils/productsMock"

const ItemDetail = ({data}) =>{
    console.log("data",data)
    return (
        <div>
           <h1>{producto.title}</h1>
           <p>{producto.image}</p>
           <p>{producto.price}</p>
        </div>
    )
}

export default ItemDetail