import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Recommendations from './components/Recommendations';


function App() {
  return (
    <div className="App">
      <Main/>
      <Recommendations />
      <Footer/>
    </div>
  );
}

export default App;
