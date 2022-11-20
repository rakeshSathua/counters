
import './App.css';
import Reset from './component/Reset';
import Countergroup from './component/Countergroup';
import React from 'react';

function App() {
  let [globalCounterNum, setGlobalCounterNum] = React.useState("");
  let [globalCounterVal, setGlobalCounterVal] = React.useState("");

  function getResetData(countNum, countVal){
    setGlobalCounterNum(countNum);
    setGlobalCounterVal(countVal);
  }

  function resetGlobals(){
    setGlobalCounterNum("");
    setGlobalCounterVal("");
  }

  return (
    <div className="App">
      React
      <Reset getResetData={getResetData}></Reset>
      <Countergroup 
      resetGlobals={resetGlobals}
      globalCounterNum={globalCounterNum} 
      globalCounterVal={globalCounterVal}>
        
      </Countergroup>
    </div>
  );
}

export default App;
