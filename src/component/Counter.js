import React from "react";
import "./Counter.css"

function Counter (props){
    let[count, changeCount] = React.useState(0);
    let num = props.number;
    let vall = props.val;
    let numm = props.num;
    if (num == Number(numm) && count != Number(vall)){
        changeCount(Number(vall));
        props.resetG();
        //console.log("Counter is running");

    }


    let increment = () => {
        changeCount(Number(count) + 1);
    }

    let decrement = () => {
        changeCount(Number(count) - 1);
    }

    return(
        <div className="counter">
            <h3>Counter Number : {num} </h3>
            <button className="bg-pink-500 hover:bg-black-700 text-white font-bold py-2 px-2 px-4 rounded" 
            onClick={increment}> + </button>
            <p> Count : {count} </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 px-4 rounded" 
            onClick={decrement}> - </button>
            
        </div>
    )
}
export default Counter;