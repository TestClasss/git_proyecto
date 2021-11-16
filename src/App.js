
import './App.css';
import {useUserContext} from './context/userContext';


function App() {
  const context = useUserContext();
  console.log({context});
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
