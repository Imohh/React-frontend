import React from 'react';
import Footer from "./components/Footer";

function App() {

const name = 'Brad'

  return (
    <div className="container">

      <h1>This is counter app</h1>
      <h2>Hello {name}</h2>

      <Footer />


   </div>
  )
}

export default App