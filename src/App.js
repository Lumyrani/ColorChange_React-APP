import logo from './logo.svg';
import './App.css';
import Colorchange from './components/Colorchange';
import './components/Colorchange.css'


function App() {
  return (
    <>
    <div className="change">
      Array of Colors:
      <br/>
      red
      <br/>
      green
      <br/>
      yellow
      <br/>
      orange
      <br/>
      black
    </div>
  
  <Colorchange />
  </>
  );
}

export default App;
