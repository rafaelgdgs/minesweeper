import './App.css';

import Board from './layout/Board'

function App() {
  return (
    <div className="App">
      <Board rows={20} columns={10}/>
    </div>  
  );
}

export default App;
