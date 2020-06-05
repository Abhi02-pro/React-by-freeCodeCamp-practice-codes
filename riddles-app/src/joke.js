import React from 'react';
import "./style.css";
function Joke(props) {
    return (
        <div className="riddle">
            <h3 style={{display: !props.question && 'none'}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && '#999'}}>Answer: {props.answer}</h3>
            <hr/>
     </div>
    )
}

export default Joke;