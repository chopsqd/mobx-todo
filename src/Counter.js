import React from 'react';
import './App.css'
import counter from './mobx/counter'
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <div className={"counter"}>
            {counter.total}
            <div className="btns">
                <div className="btn" onClick={() => counter.increment()}>+</div>
                <div className="btn" onClick={() => counter.decrement()}>-</div>
            </div>
        </div>
    );
});

export default Counter;