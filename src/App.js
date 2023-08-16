import logo from './logo.svg';
import './App.css';

import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePages from './pages/HomePages';
import Layout from './Components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExportSearchpage from './pages/ExportSearchpage';

function App() {
  return (
    <>
    
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path='searchpage' element={<SearchPage />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='exportSreachPage' element={<ExportSearchpage />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
