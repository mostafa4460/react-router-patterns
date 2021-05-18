import {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ColorFactory from './ColorFactory';
import NewColorForm from './NewColorForm';
import Color from './Color';
import './App.css';

function App() {
  const DEFAULT_COLORS = [
    {name: 'red', value: 'red'}, 
    {name: 'white', value: 'white'}, 
    {name: 'blue', value: 'blue'}
  ];
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const addColor = newColor => setColors(old => [newColor, ...old]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:name">
          <Color colors={colors} />
        </Route>
        <Route exact path="/colors">
          <ColorFactory colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
