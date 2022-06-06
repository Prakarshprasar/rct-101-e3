import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Login from "./pages/Login";
import {BrowserRouter} from "react-router-dom"
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import Home from "./pages/Home";
import Products from "./components/Products/Products";

function App() {
  // const {isAuth}=useContext(AuthContext)
  return (
    <div className="App">
    <AuthProvider>
     <BrowserRouter>

       <Navbar/>
       
       <Login/>
       <Home/>
        
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
