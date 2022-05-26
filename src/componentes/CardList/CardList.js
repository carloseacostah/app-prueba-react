import {useState, useEffect} from 'react';
import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    const [products,setProducts] = useState([])
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
    const getProducts = () => {
        return new Promise( (resolve, reject) =>{
           setTimeout( () => {
            resolve(productos)
           },4000) 
        })
    }

    useEffect(() => {
        getProducts()
        .then( (response) =>{
            //console.log("Respuesta Promesa:", response)
        })
        .catch((err) => {
            //console.log ("Fallo en la llamada")
        })
        .finally (() => {
            //console.log("Termino la Promesa")
        })
    },[])

    

    /*
    async function getProductsAsincrono () {
        try{
            const productos = await getProducts()
            console.log("Productos Asincronos: ", productos)

        }  catch (err){
            console.log("Fallo la Llamada")
        } 
    }
    getProductsAsincrono() 
    */

    return (
        <>
        <h2>{title}</h2>
            <Grid container spacing={2}>
                {
                    productos.map( (producto) => {

                        return (
                            <div>
                                <Grid item md={3} key={producto.id}>
                                <CardItem  title={producto.title} price={producto.price} image={producto.image}/>
                                </Grid>
                            </div>
                        )

                    })
                }
      
            </Grid>
        </>
    )
}
export default CardList