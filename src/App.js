import './App.css';
import RecipeList from './components/RecipeList'
import Home from './components/Home';
import Nav from './components/Nav';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>RECIPE FINDER</h1>
      <p>With React Redux</p>
      <BrowserRouter>
      <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/recipelist' component={RecipeList} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;