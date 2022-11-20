import React from "react";
import Counter from "./Counter";
import "./Countergroup.css"

function Countergroup(props) {
    let num = props.globalCounterNum;
    let val = props.globalCounterVal;
    let resetG = props.resetGlobals;
    

    return (
    <div className="countergroup">
        
        <Counter number={1} val={val} num={num} resetG={resetG}></Counter>
        <Counter number={2} val={val} num={num} resetG={resetG}></Counter>
        <Counter number={3} val={val} num={num} resetG={resetG}></Counter>
        
    </div>
    )

}

export default Countergroup;