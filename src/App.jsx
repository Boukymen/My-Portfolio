// import { Route, Switch } from 'react-router-dom'
import './app.scss'
import Intro from './components/intro/Intro';
import Topbar from './components/Topbar/Topbar';
import Portfolio from './components/portofolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Menu from './components/menu/Menu';



function App() {
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <section className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </section>
    </div>
  );
}

export default App;