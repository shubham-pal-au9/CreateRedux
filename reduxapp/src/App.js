import React from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="container">
        <h1> Increment/ Decrement counter </h1>
        <h4>Using React and redux</h4>

        <div className="quantity">
          <span className="quantity_minus" title="Decrement"
          onClick={ ()=> dispatch(decNumber()) }>
            <span> - </span>
          </span>
          <input type="text" name="quantity" className="quantity_input" value={myState} />
          <span className="quantity_plus" title="Increment"
          onClick={ ()=> dispatch(incNumber()) }>
            <span> + </span>
          </span>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default App;