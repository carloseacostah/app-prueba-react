import CardItem from '../Card/Card';
import { Grid } from '@mui/material';


const CardList = ({title}) => {
    
    return (
        <>
        <h2>{title}</h2>
            <Grid container >
                <Grid item md={2}>
                <CardItem  title={"Producto 1"} price={2500} image={"1.jpeg"}/>
                </Grid>
                <Grid item md={2}>
                    <CardItem  title={"Producto 2"} price={500} image={"2.jpeg"}/>
                </Grid>
                <Grid item md={2}>
                    <CardItem  title={"Producto 3"} price={1500} image={"3.jpeg"}/>
                </Grid>
                <Grid item md={2}>
                    <CardItem  title={"Producto 4"} price={2500} image={"4.jpeg"}/>
                </Grid>
                <Grid item md={2}>
                    <CardItem  title={"Producto 5"} price={1500} image={"5.jpeg"}/>
                </Grid>
            </Grid>
        </>
    )
}
export default CardList