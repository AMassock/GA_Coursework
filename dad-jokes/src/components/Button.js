import React, { useState } from "react";
import './Button.css';

export default function Button(props) {

    return(
        <div className="joke-btn">
            <button onClick={props.click}>New Joke</button>
        </div>
    )
}