import './App.css';
import RecipeList from './components/RecipeList';
import Home from './components/Home';
import Nav from './components/Nav';
import SingleDish from './components/SingleDish';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="my_container">
      <h1 id='title'>RECIPE FINDER</h1>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recipelist' component={RecipeList} />
          <Route path='/:the_url_we_need' component={SingleDish} />
        </Switch>
       </BrowserRouter>
      
    </div>
  );
}

export default App;