import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos, { producto } from "../utils/productsMock"
const ItemListContainer = () => {
    const [product, setProducts] = useState({})
    const getItem = () => {
        return new Promise  ((resolve,reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(()=>{
        getItem()
        .then((res) =>{
            console.log("respuesta GetItem",res)
        })
    },[])


    return(
        <>
            <div> Contenedor Item</div>
            
            <ItemDetail data={productos}/>    
        </>
    )

}
export default ItemListContainer