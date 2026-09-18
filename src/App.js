import logo from './logo.svg';
import './App.css';
import QuranContexted from "../src/Context/Quran"
import SulahContext from '../src/Context/Sulah'
import Barsed from '../src/Components/Barsed'
import DoaaContext from '../src/Context/Doaas' 
import AdkarContext from "../src/Context/ShowAdkar"
function App() {
  return (
    <AdkarContext>        
    <SulahContext>                                   
     <QuranContexted> 
      <DoaaContext>                
    <div className="App">
     

    <Barsed/>


    </div>
     </DoaaContext>
              </QuranContexted>
               </SulahContext>
                </AdkarContext>

  );
}

export default App;
