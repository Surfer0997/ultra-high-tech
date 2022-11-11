import './App.css';
import { Background } from './components/Background/Background';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AboutUs } from './components/Main/AboutUs/AboutUs';
import { ToPartners } from './components/Main/To partners/ToPartners';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Shop } from './components/Main/Shop/Shop';
import { Cart } from './components/Cart/Cart';
import { ThemeSwitch } from './components/UI/ThemeSwitch';

function App() {
  return (
    <>
      <Background />
      <ThemeSwitch />
      <Router>
        <div className="App">
          <Header />
          <Cart />
          <main>
            <Routes>
              <Route path="/ultra-high-tech/">
                <Route path="/ultra-high-tech/about" element={<AboutUs />} />
                <Route path="/ultra-high-tech/shop" element={<Shop />} />
                <Route path="/ultra-high-tech/partners" element={<ToPartners />} />
                <Route path="/ultra-high-tech/*" element={<Shop />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
