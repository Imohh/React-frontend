import { render } from "react-dom";
// import { BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
// import Home from "./Home";
// import About from "./About";
// import Product from "./Product";
import { AppProvider } from './project11/context'

const rootElement = document.getElementById("root");
render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="home" element={<Home />} />
  //     <Route path="about" element={<About />} />
  //     <Route path="product" element={<Product />} />
  //   </Routes>
  // </BrowserRouter>,
  <AppProvider>
    <App />
  </AppProvider>,
  rootElement
);