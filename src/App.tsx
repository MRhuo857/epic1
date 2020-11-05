import React, {lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Loading from './component/Loading';

const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const History=lazy(()=>import('./pages/History'))
function App() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Suspense>

      <Footer/>
    </Router>
  );
}
export default App;
