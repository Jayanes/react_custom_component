import './App.css';
import Header from "./header/Header";
import BodyElements from "./body/BodyElements";

function App() {
  return (
    <div className="App">
      <Header className='App-header' title= 'React custom methods ' subTitle= 'My awesome colors' />
      <BodyElements buttonName='Click to change subtitle color' />
    </div>
  );
}

export default App;
