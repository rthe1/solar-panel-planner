import logo from './logo.svg';
import './App.css';
import CalculatorSide from './components/CalculatorSide';
import DisplaySide from './components/DisplaySide';
import DisplayWriteUp from './components/DisplayWriteUp';
import { FormDisplayContextProvider } from './context/FormDisplayContext';

function App() {
  return (
    <div className="App">

      <FormDisplayContextProvider>

        

      <div class="top">

      <div class="left">
      <div class ="calc-side">
      <CalculatorSide/>
      </div>
      </div>

      <div class="right">
      <div class ="display-side">
      <DisplaySide/>
      </div>
      </div>

      </div>



      <div class="bottom">

      <div class ="display-writeup">
      <DisplayWriteUp/>
      </div>

      </div>

      </FormDisplayContextProvider>

    </div>
  );
}

export default App;
