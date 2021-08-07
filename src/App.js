import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Coders!"/>

    </>
   
  );
}

export default App;
