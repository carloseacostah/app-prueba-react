import './App.css';
import './test.css';
import NavBar from './componentes/NavBar/NavBar';



function App() {
  let test = "Coder"
  let styleCustom= {
    color : 'green',
    border: '1px solid',
    marginBottom: 20
  }
  
  return (
    <div className="App" style={styleCustom} >
     <NavBar/>
      <h1 className="title" >
          Contenido del App {test}
      </h1>  
    </div>
  );
}

export default App;
