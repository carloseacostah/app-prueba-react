import './App.css';
import './test.css';
import NavBar from './componentes/NavBar/NavBar';
import UbicacionPagina from './componentes/Ubicacion/Ubicacion';
import { useState } from 'react';
import ItemList from './componentes/item/ItemListContainer';

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
   
      </div>
      <div >
     
      </div>
   <ItemList />
     
    </div>
  );
}

export default App;
