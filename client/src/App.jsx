import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AddPage from './pages/AddPage';
import MainLayout from './layout/MainLayout';
import DetailPage from './pages/DetailPage';
import WislistPage from './pages/Wishlist';
import AdminPage from './pages/Admin';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddPage/>} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/:id" element={<DetailPage/>} />
          <Route path="/wislist" element={<WislistPage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
