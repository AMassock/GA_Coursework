import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ParkDetail from './ParkDetail';
import Home from './Home';
import './ParksList.css';

export default function ParksList(props) {


    let parkList = props.data.map((park, i) => {
        const img = park.images[0].url
        const name = park.name
        const id = park.id

        return( 
            <>
                <Link to={`/Park/${id}`}>
                    <div className="parkPrev" key={id}>
                        <img src={img} alt={name} />
                        <p>{name}</p>
                    </div>
                </Link>
            </>
        )
    })
    
    return(
        <div className="all-parks">
            <Home />
            <ParkDetail list={parkList} />
        </div>
    )
}