import CakeContainer from './components/CakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewContainer from './components/NewContainer';
import ItemContainer from './components/ItemContainer';
function App() {
  return (
    <div className="App">
    <ItemContainer cake/>
      {/*<CakeContainer />*/}
      {/*<HooksCakeContainer />*/}
      {/*<HooksIceCreamContainer/>*/}
      <NewContainer/>
    </div>
  );
}

export default App;
