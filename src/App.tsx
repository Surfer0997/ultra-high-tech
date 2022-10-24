import './App.css';
import { Background } from './components/Background/Background';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AboutUs } from './components/Main/AboutUs/AboutUs';
import { ToPartners } from './components/Main/To partners/ToPartners';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shop } from './components/Main/Shop/Shop';
import { Cart } from './components/Cart/Cart';
import { ThemeSwitch } from './components/UI/ThemeSwitch';

function App() {
  return (
    <>
      <Background />
      <ThemeSwitch/>
      <Router>
        <div className="App">
          <Header />
          <Cart/>
          <main>
            <Routes>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/partners" element={<ToPartners />} />
              <Route path="*" element={<Shop />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
