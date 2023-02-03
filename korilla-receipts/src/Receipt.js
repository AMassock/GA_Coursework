import React from 'react';
import './Receipt.css';

function Receipt(props) {
    // console.log(props);
    return(
        <div className="receipt">
            <h2>{props.person}</h2>
            <h4>{props.main}</h4>
            <hr/>
            <br />
            <span>Protein: {props.protein}</span>
            <br />
            <span>Rice: {props.rice}</span>
            <br />
            <span>Sauce: {props.sauce}</span>
            <br />
            <span>Drink: {props.drink}</span>
            <br />
            <span>Cost: {props.cost}</span>
        </div>
    );
}

export default Receipt;