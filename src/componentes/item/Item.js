import CardItem from '../Card/Card';
import { Grid } from '@mui/material';


const Item = ({ title, price, image }) => {


    return (

        <div>
        <Grid item md={2}  >
        <CardItem  title={title} price={price} image={image}/>
        </Grid>
        </div>
         



    )
}
export default Item