import { useEffect, useState } from 'react'
import {Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import axios from "axios";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const URL_API = "https://mocki.io/v1/23637d91-5c03-428a-b653-c05776b41668";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios(URL_API);
      setProductos(response.data);
    } catch (error) {
      console.log("Este es el ERROR: " + error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <Link to="/">
        <div className="brand">
          <img src="./public/img/Logo.png" alt="Logo del sitio" className="logo"/>
        </div>
      </Link>
      <Navbar />
      <h1 className="tituloPrincipal">¡Explora un universo de historias en nuestra tienda de cómics online!</h1>
      <Routes>
        <Route path="/" element={<ItemListContainer productos={ productos }/>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/item/:id" element={<ItemDetailContainer productos={ productos } />} />
        <Route path="/category/:id" element={<ItemListContainer productos={ productos }/>} />
      </Routes>
      
      <footer className="footer">
        <ul>
          <li>
            <p>Telefono: 1234-5678</p>
          </li>
          <li>
            <p>Dirección: Calle Falsa 123</p>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
        <span>Todos los derechos reservados</span>
      </footer>
    </div>
  )
}

export default App
