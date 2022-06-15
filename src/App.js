import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from "./components/login/login"
import {ContextProvider} from "./context"

import Header from "./header/header"
import Footer from "./footer/footer"

import Home from "./homepage"

import ProtectedRoute from "./components/helper/protectedRoute";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ContextProvider>
          <Header/>

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="login/*" element={<Login/>}/>
              <Route path="conta/*" element={<ProtectedRoute/>}/>
            </Routes>

            <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
