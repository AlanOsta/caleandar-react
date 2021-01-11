import './App.css';
import Calendario from './components/calendario/Calendario';
//import Mes from './components/calendario/Mes';
//import Calendar from './components/calendar/indexraj'

/*const style = {
  position: "relative",
  maring: "50px Auto"
}*/

function App() {
  return (
    <div id="App">
      {/* <Calendar style={style} width="250px"/> */}
      {/* <Mes /> */}
      <Calendario/>

    </div>
  );
}

export default App;
