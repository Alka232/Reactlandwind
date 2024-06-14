import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';
import Hero from'./components/Hero';
import User from './components/User';
import Products from './components/Products';
import Clients from './components/Clients';
import Usedtool from './components/Usedtool';
import InvestPotential from './components/InvestPotential';
import TrustedWorld from './components/TrustedWorld';
import Michael from './components/Michael';
import BussinesTeam from './components/BussinesTeam';
import Trail from './components/Trail';


function App() {
  return (
    <>
      <Header />
      <main className="bg-white">
      <Hero/>
      <Clients/>
      <Usedtool/>
      <Products/>
      <InvestPotential/>
      <TrustedWorld/>
      <Michael/>
      {/* <BussinesTeam/> */}
      <Trail/>
      </main>

      <User/>

      <Footer />
    </>
  );
}

export default App;
