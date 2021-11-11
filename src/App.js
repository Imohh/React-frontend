import React from 'react';
import About from './About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <div>
        <About/>
        <Routes>
          <Route patch="/" exact component={Home} />
          <Route patch="/about" component={About} />
        </Routes>
      </div>
    </Router>
    
  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>

)

export default App