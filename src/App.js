import './App.css';
import './test.css';
import NavBar from './componentes/NavBar/NavBar';
import UbicacionPagina from './componentes/Ubicacion/Ubicacion';
import { useEffect  } from 'react';
import ItemList from './componentes/item/ItemListContainer';
import ItemListContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {

  let styleCustom= {
    border: '1px solid',
    marginBottom: 20
  }
  
  useEffect( ()=>{
  fetch('https://jsonplaceholder.typicode.com/users', {
    method:'POST',
    headers: {
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Content-Type':'application/json',
     // 'Autorization':token
    }
  })
    .then((response) =>{
      return response.json()
    })
    .then ((res)=>{
      console.log ("respuesta", res)
    })

  }, [])
  
  
  return (
    <div className="App" style={styleCustom} >
      <NavBar/>
      <div >
        {/*<UbicacionPagina  title={"> INICIO "} />*/ }
      </div>
      <div >
   
      </div>
      <div >
     
      </div>
    <ItemListContainer /> 
    
     
    </div>
  );
}

export default App;
