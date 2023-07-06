import React, { useState } from "react";
import Button from "./Button";
import './Joke.css';

export default function Joke(props) {
    let joke = props.joke

    return(
        <div>
            <div className="container">
                <p>{joke}</p>
            </div>
            {/* <Button /> */}
        </div>
    )
}