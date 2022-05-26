import './Card.css';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';

const CardItem = ({image, title, price}) => {
    const [open, setOpen] = useState(false)
    const [count,setCount] = useState(0)
    const handleClose = () =>{
      setOpen(false)
    }
    const addCount=() => {
        setCount(count + 1)
    }
    const removeCount=() => {
        if (count >0){setCount(count - 1)}
    }
  return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <div className="card-item">
                <div>
                    <img src ={`./${image}`} />
                </div>
               
                <p>{title}</p>
                <span>{price}</span>
                <div className='count-item'>
                    <Button onClick={removeCount} disabled={count==0}>-</Button>
                    <p>{count}</p>
                    <Button onClick={addCount} disabled={count==5}>+</Button>
                   Contador de click: {count} Fecha: date
                </div>
            </div>
                <Button variant={'contained'} onClick={() => setOpen(true)} >Detalle</Button>
            
            </CardContent>
            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} />
            </Modal>
        </Card>
    )

}


export default CardItem