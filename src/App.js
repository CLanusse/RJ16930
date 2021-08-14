import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Clock } from "./components/Clock/Clock";
import { ClickTracker } from "./components/ClickTracker/ClickTracker";

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Coders"/>

      <ClickTracker/>
      {/* <Clock/> */}
    </>
   
  );
}

export default App;
