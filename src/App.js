import './App.css';
import './test.css';
import NavBar from './componentes/NavBar/NavBar';
import CardList from './componentes/CardList/CardList';
import SnackBar from './componentes/SnackBar/SnackBar';
import UbicacionPagina from './componentes/Ubicacion/Ubicacion';
import { useState } from 'react';

function App() {

  let styleCustom= {
    border: '1px solid',
    marginBottom: 20
  }
  
  return (
    <div className="App" style={styleCustom} >
      <NavBar/>
      <div >
        <UbicacionPagina  title={"> INICIO "} />
      </div>
      <div >
        <CardList  title={"Producto Recomendados"}/>
      </div>
      <div >
        <CardList  title={"Producto Relacionados"}/>
      </div>
     
    </div>
  );
}

export default App;
