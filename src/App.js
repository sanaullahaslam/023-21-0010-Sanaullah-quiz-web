import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import ContactUs from './components/Contact Us';

function App() {
  return (
    <div>
     <Navbar/>
      <Welcome />
      <ContactUs />

    </div>
  );
}

export default App;