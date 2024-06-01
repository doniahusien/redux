import CakeContainer from './components/CakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';

function App() {
  return (
    <div className="App">
      {/*<CakeContainer />*/}
      <HooksCakeContainer />
      <HooksIceCreamContainer/>
      
    </div>
  );
}

export default App;
