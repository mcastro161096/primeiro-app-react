import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/';
import Footer from './componentes/Footer/';
import HomePage from './componentes/HomePage/'
import NumeroAleatorio from './componentes/NumeroAleatorio/'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <NumeroAleatorio />
      <Footer />
    </div>
  );
}

export default App;
