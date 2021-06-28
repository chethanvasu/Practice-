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
import AddingElements from "./components/AddingElements"
import SearchingString from './components/searching-a-string';
import SearchFilter from "./components/search-filter";
import Counter from "./components/Counter";
import IncrementDecrement from "./components/increment-decrement"
import ColorChange from "./components/colorchanging"
import NumberSetTimeOut from "./components/SetTimeOut/index"
import Timer from './components/Timer';
import CounterJump from './components/CounterJump';
import DateTime from './components/Date&Time';

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
      <Link to="/fibonacci-series">Fibonacci Series</Link>
    </li>
    <li>
      <Link to="/list-add">Adding list</Link>
    </li>
    <li>
      <Link to="/SearchAString">Searching of A string</Link>
    </li>
    <li>
      <Link to="/add-del-elements">Adding of Elements using RadioButton</Link>
    </li>
    <li>
      <Link to="/SearchingString">Searching String </Link>
    </li>
    <li>
      <Link to="/search-filter"> Search Filter</Link>
    </li>
    <li>
      <Link to="/counter"> Counter</Link>
    </li>
    <li>
      <Link to="/increment-decrement"> Increment and Decrement </Link>
    </li>
    <li>
      <Link to="/color-changing"> Background Color Change </Link>
    </li>
    <li>
      <Link to="/setTimeOut"> Counter Timeout</Link>
    </li>
    <li>
      <Link to="/timer"> Timer </Link>
    </li>
    <li>
      <Link to="/counter-jump"> Counter Jumping </Link>
    </li>
    <li>
      <Link to="/date-time"> Date and Time counter </Link>
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
          <Route path="/add-del-elements">
            <AddingElements />
          </Route>
          <Route path="/SearchingString">
            <SearchingString/>
          </Route>
          <Route path="/search-filter">
            <SearchFilter/>
          </Route>
          <Route path="/Counter">
            <Counter/>
          </Route>
          <Route path="/increment-decrement">
            <IncrementDecrement/>
          </Route>
          <Route path="/color-changing">
            <ColorChange/>
          </Route>
          <Route path="/setTimeOut">
            <NumberSetTimeOut/>
          </Route>
          <Route path="/timer">
            <Timer/>
          </Route>
          <Route path="/counter-jump">
            <CounterJump/>
          </Route>
          <Route path="/date-time">
            <DateTime/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
