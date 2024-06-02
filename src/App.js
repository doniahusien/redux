import CakeContainer from './components/CakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewContainer from './components/NewContainer';
function App() {
  return (
    <div className="App">
      {/*<CakeContainer />*/}
      <HooksCakeContainer />
      <HooksIceCreamContainer/>
      <NewContainer/>
    </div>
  );
}

export default App;
