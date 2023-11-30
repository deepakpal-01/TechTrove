import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import ErrorPage from './Components/ErrorPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { GlobalStyle } from './Components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer';

function App() {

  const [progress,setProgress]=useState(0);

  const theme={
    colors:{
      textColor:"black",
      bgc:"white"
    }
  }


  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
          <GlobalStyle/>
          <Header progress={progress} setProgress={setProgress}/>
          <Routes>
            <Route path='/' element={<Home setProgress={setProgress}/>}></Route>
            <Route path='/about' element={<About setProgress={setProgress}/>}></Route>
            <Route path='/contact' element={<Contact setProgress={setProgress}/>}></Route>
            <Route path='/products' element={<Products setProgress={setProgress}/>}></Route>
            <Route path='/cart' element={<Cart setProgress={setProgress}/>}></Route>
            <Route path='/productdetails/:id' element={<ProductDetails />}></Route>
            <Route path='*' element={<ErrorPage setProgress={setProgress}/>}></Route>
          </Routes>
          <Footer/>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
