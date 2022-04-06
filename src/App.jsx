import './App.scss';
import { About, Testimonials, Work, Skills, Header, Footer } from './container';
import { NavBar } from './components';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
