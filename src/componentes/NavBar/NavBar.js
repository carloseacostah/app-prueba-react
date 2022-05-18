//import React from "react"
//UpperCamelCase
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavBar = () => {
    return (
        <AppBar position="static" >
          <Toolbar>
            <div className='container-logo'>
              <img src='./logo192.png'/>
            </div>
            
              <ul className="ul"> 
                  <li className='li'>
                  <Button color="inherit">Inicio</Button>
                  </li>
                  <li>
                  <Button color="inherit">Vehiculos</Button>
                  </li>
                  <li>
                  <Button color="inherit">Electrónica</Button>
                  </li>
                  <li>
                  <Button color="inherit">Libros</Button>
                  </li>
                </ul>
            <Button color="inherit">Login</Button>
            <AddShoppingCartIcon />
          </Toolbar>
        </AppBar>
    )

}

export default NavBar