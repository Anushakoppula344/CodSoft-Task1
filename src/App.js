
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Body} from './components/Body.js';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Body></Body>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
