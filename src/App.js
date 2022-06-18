import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from "./components/login/login"
import {ContextProvider} from "./context"

import Header from "./header/header"
import Footer from "./footer/footer"

import Home from "./homepage"

import ProtectedRoute from "./components/helper/protectedRoute";
import Photo from "./components/feed/photo"
import Profile from "./components/user/profile";
import ErrorPage from "./components/helper/errorPage";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ContextProvider>
          <Header/>

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="login/*" element={<Login/>}/>
              <Route path="perfil/:user" element={<Profile/>}/>

              <Route path="conta/*" element={<ProtectedRoute/>}/>
              <Route path="foto/:id" element={<Photo/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>

            <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
