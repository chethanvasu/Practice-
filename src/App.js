import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import StoryView from "./stories";
import CollectionView from "./collection";
import AuthorsList from './stories/AuthorsList';
import EntityList from './stories/EntityList';
import AddTwoNumbers from "./components/add-two-numbers";
import FibonacciSeries from "./components/fibonacci-series";
import AddList from "./components/list-add";
import SearchAString from "./components/SearchAString/SearchAString"

const RoutesView = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/collections">Collections</Link>
    </li>
    <li>
      <Link to="/stories">Stories</Link>
    </li>
    <li>
      <Link to="/authors">Authors</Link>
    </li>
    <li>
      <Link to="/entities">Entities</Link>
    </li>
    <li>
      <Link to="/add-two-numbers">Addition of 2 Numbers</Link>
    </li>
    <li>
      <Link to="fibonacci-series">Fibonacci Series</Link>
    </li>
    <li>
      <Link to="list-add">Adding list</Link>
    </li>
    <li>
      <Link to="SearchAString">Searching of A string</Link>
    </li>
  </ul>
);

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <RoutesView />
          </Route>
          <Route path="/collections">
            <CollectionView />
          </Route>
          <Route path="/stories">
            <StoryView />
          </Route>
          <Route path="/authors">
            <AuthorsList />
          </Route>
          <Route path="/entities">
            <EntityList />
          </Route>
          <Route path="/add-two-numbers">
            <AddTwoNumbers />
          </Route>
          <Route path="/fibonacci-series">
            <FibonacciSeries />
          </Route>
          <Route path="/list-add">
            <AddList />
          </Route>
          <Route path="/SearchAString">
            <SearchAString/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
