// import React from 'react';
// import{BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
// import './App.scss';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import Footer from './components/Footer/Footer';
// import PageNotFound from './components/PageNotFound/PageNotFound';
// import MovieDetail from './components/MovieDetail/MovieDetail';



// function App() {
//   return (
//     <div className="App">
//      <Header />
//      <Router>
//       <Switch>
//       <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/movie/:imdbID' element={<MovieDetail/>}></Route>
//       <Route element={<PageNotFound/>}></Route>
//       </Routes>
//       </Switch>
//      </Router>
//      <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
  
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      
    </div>
  );
}

export default App;
