import React from 'react';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./header/home";
import Search from "./header/search";
import Register from "./header/register";
import Cabinet from "./header/cabinet";
import Add from "./header/add";
import Feedback from "./header/feedback";



function App() {
  return (
      <>
        
          <Router>
              <Routes>
                  
                  <Route
                      exact
                      path="/"
                      element={<Home />}
                  />

                 
                  <Route
                      path="/search"
                      element={<Search />}
                  />

                     <Route
                      path="/register"
                      element={<Register />}
                  />
                   <Route
                      path="/cabinet"
                      element={<Cabinet />}
                  />

                    <Route
                      path="/add"
                      element={<Add />}
                  />
                   <Route
                      path="/feedback"
                      element={<Feedback />}
                  />
              </Routes>
          </Router>
      </>
  );
}







export default App;
