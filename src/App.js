import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Fragment } from 'react';
import Hero from'./components/Hero'


function App() {
  return (
    <>
      <Header />
      <main className="bg-white">
      <Hero/>
      </main>

      <Footer />
    </>
  );
}

export default App;
