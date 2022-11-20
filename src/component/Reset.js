import React from "react";
import "./Reset.css"


  
function Reset(props) {
    const [countNoVal, setCountNoVal] = React.useState("");
    const [countVal, setCountVal] = React.useState("");

    const setInput1 = (e) => {
        setCountNoVal(e.target.value);
    }

    const setInput2 = (e) => {
        setCountVal(e.target.value);
    }

    const resetCounter = () => {
        console.log("Reset is running");
        console.log("1. "+ countNoVal);
        console.log("2. " + countVal);

        props.getResetData(countNoVal, countVal);

    }

    return (
        <div className="reset">
            <h2>Reset Counter</h2>
            <div>
                <span>Counter No. </span>
                <input className="border rounded py-1 px-1 mx- 2 font-bold" 
                type="text" value={countNoVal} onChange={setInput1}></input>
            </div>
            <div>
                <span>Counter Val: </span>
                <input className="border rounded py-1 px-1 mx- 2 font-bold"
                type="text" value={countVal} onChange={setInput2}></input>
            </div>

            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 px-4 rounded" 
            onClick={resetCounter}> Reset Counter </button>
            <p> </p>

        </div>
    )
}

export default Reset;