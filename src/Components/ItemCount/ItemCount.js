import React, { useState } from "react";

function ItemCount() {
  const[counter, setCounter] = useState(0);
  const Add=() => setCounter(counter + 1);
  const Substract=() => setCounter(counter - 1);

  return (
    <div className="container w-50 ms-0 mb-3">
      <div className="row">
        <div className="col-xs-3 col-xs-offset-3">
          <div className="input-group number-spinner">
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={Substract} data-dir="dwn"><span className="bi bi-dash-lg"></span></button>
            </span>
            <input type="text" onChange={e => setCounter(e.target.value)} className="form-control text-center" value={counter}/>
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={Add} data-dir="up"><span className="bi bi-plus-lg"></span></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount;
