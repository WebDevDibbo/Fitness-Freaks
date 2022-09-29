import './App.css';
import Question from './component/Question/Question';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
