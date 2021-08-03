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
import AddingCheckboxElements from './components/AddingCheckboxElements';
import DynamicalAddingElements from './components/DynamicalElements';
import DynamicalDeletingELements from './components/DynamicDeleteElements';
import Toggle from './components/Toggle';
import SampleApi from "./components/sample-api";
import Api from './components/Api Calls';
import ApiNH from './components/Api-NH';
import ApiQuint from './components/Api-Quint';
import GhoAPi from './components/gho-api';
import GhoAPiDimension from './components/Gho-APi-Dimension';
import Calculator from './components/Calculator';
import SimpleCalculator from './components/SimpleCalculator';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoList/ToDoForm';
import ToDoListAdd from './components/ToDoList';
import ApiQuintStories from './components/Api-quint-times';
import Pagination from './components/Pagination';

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
    </li>SimpleCalculator
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
    <li>
      <Link to="/checkbox-elements"> Adding of Elements using Checkbox </Link>
    </li>
    <li>
      <Link to="/dynamical-adding-elements"> Dynamically Adding of Elements</Link>
    </li>
    <li>
      <Link to="/dynamical-deleting-elements"> Dynamically Deleteing of Elements with Index</Link>
    </li>
    <li>
      <Link to="/toggle-elements"> Hide and show </Link>
    </li>
    <li>
      <Link to="/sample-api">Sample API</Link>
    </li>
    <li>
      <Link to="/api"> API's</Link>
    </li>
    <li>
      <Link to="/api-nh"> API-National Herald</Link>
    </li>
    <li>
      <Link to="/api-quint"> API-Quint</Link>
    </li>
    <li>
      <Link to="/gho-api"> GHO</Link>
    </li>
    <li>
      <Link to="/gho-api-dimension"> GHO-Dimension</Link>
    </li>
    <li>
      <Link to="/calculator"> Calculator</Link>
    </li>
    <li>
      <Link to="/simple-calculator"> Simple Calculator</Link>
    </li>
    <li>
      <Link to="/to-do-list"> To-Do-list</Link>
    </li>
    <li>
      <Link to="/api-quint-stories"> Api-Quint-loadmore</Link>
    </li>
    <li>
      <Link to="/pagination"> Pagination</Link>
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
            <SearchFilter/>SampleApi
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
          <Route path = "/checkbox-elements"> 
            <AddingCheckboxElements/>
          </Route>
          <Route path = "/dynamical-adding-elements"> 
            <DynamicalAddingElements/>
          </Route>
          <Route path = "/dynamical-deleting-elements"> 
            <DynamicalDeletingELements/>
          </Route>
          <Route path = "/toggle-elements"> 
            <Toggle/>
          </Route>
          <Route path = "/sample-api"> 
            <SampleApi/>  <Route path = "/simple-calculator"> 
            <SimpleCalculator/>
          </Route>
          </Route>
          <Route path = "/api"> 
            <Api/>
          </Route>
          <Route path = "/api-nh"> 
            <ApiNH/>
          </Route>api-quint-stories
          <Route path = "/api-quint"> 
            <ApiQuint/>
          </Route>
          <Route path = "/gho-api"> 
            <GhoAPi/>
          </Route>
          <Route path = "/gho-api-dimension"> 
            <GhoAPiDimension/>
          </Route>
          <Route path = "/calculator"> 
            <Calculator/>
          </Route>
          <Route path = "/simple-calculator"> 
            <SimpleCalculator/>
          </Route>
          <Route path = "/to-do-list"> 
            <ToDoList/>
            <ToDoForm/>  
            <ToDoListAdd/>
          </Route>
          <Route path = "/api-quint-stories"> 
            <ApiQuintStories/>
          </Route>
          <Route path = "/pagination"> 
            <Pagination/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
