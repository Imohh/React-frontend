import React from 'react';
import About from './About';
import Home from './Home';
//import Nav from './Nav'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/" render={() => <div>404</div>}/>
        </Routes>
      </div>
    </Router>
  )
}



export default App