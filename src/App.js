import './App.css';
import Header from "./header/Header";
import BodyElements from "./body/BodyElements";
import { useRef } from 'react';

function App() {
    const child1Method_ref = useRef(null);
  return (
    <div className="App">
      <Header child1Method_ref={child1Method_ref} className='App-header' title= 'React custom methods '
              subTitle= 'Change color using react custom hook' subTitleTwo='Change color using react useRef()' />
      <BodyElements child1Method_ref={child1Method_ref} buttonName='Click to change subtitle color' buttonNameTwo='Try new way'/>
    </div>
  );
}

export default App;
