import Item from "./Item";
import { useState, useEffect } from "react";

const ItemList = () => {

    const [products, setProducts] = useState([])
    const productos = [
        {
            title: 'Remera Oversize',
            price: 1500,
            image:'1.jpeg',
            description: '',
            stock: 13,
            id:1
        },
        {
            title: 'Remera Oversize',
            price: 1500,
            image:'2.jpeg',
            description: '',
            stock: 132,
            id:2
        },
        {
            title: 'Remera Oversize',
            price: 1500,
            image:'3.jpeg',
            description: '',
            stock: 133,
            id:3
        },
    ]

    const getProductos = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productos)
            }, 2000)

        })
    }

    useEffect(() => {
        getProductos().then(
            (res) => {
                setProducts(res)
            }
        ).catch((err) => {

            console.log("fallo en la llamada")
        }
        )
    }, [])

    return (
        <div>

            {
                products.map((Producto) => {
                    const { id, title, price, image } = Producto
                    return (

                        <Item key={id} tittle={title} price={price} Img={image} />


                    )
                })
            }
        </div>
    )
}

export default ItemList

