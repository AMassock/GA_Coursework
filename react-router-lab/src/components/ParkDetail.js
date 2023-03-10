import React, { useEffect, useState } from 'react'

function ParkDetail(props) {

    const [park, setPark] = useState(false)
    
    useEffect(() => {
        let id = props.match.params.id
        const makeApiCall = () => {
            const url = `https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=3LPGi8GvCt8dedPIgTjFNBivWxKmCETdxgEq3aBh`
            fetch(url)
                .then(res => res.json())
                .then(json=> {
                    setPark(json.data[0])
                })
        }
        makeApiCall()
    }, [props.match.params.id])

    if (!park) {
        return <></>
    }
    
    const address = park.addresses[0]
    console.log('Park - park', park)

    let images = park.images.map( (d,i) => 
        <img src={d.url} alt='image' />
    )

    return (
        <>
        <div className="large-img-div">
            <h1 className="img-text">{park.fullName}</h1>
            <img className="large-img" alt={park.images[0] ? park.images[0].altText : park.fullName}
                src={park.images[0] ? park.images[0].url : "https://i.pinimg.com/originals/90/5b/d0/905bd03c111f41c8f656e04f71b42ad8.png"}/>
        </div>
        <p className="description">{park.description}</p>
        {address ? (
        <div className="address">
            <h2>Address</h2>
            <p>{address.line1}<br/>
                {`${address.city}, ${address.stateCode} ${address.postalCode}`}<br/>
            </p>
            <h2>Directions</h2>
            <p>{park.directionsInfo}</p>
            <a href={park.directionsUrl}>Get Directions</a>
        </div>
        
        ) : ''}
        <div id='images'>
            <h2>Images</h2>
            <div className='images'>{images}</div>
        </div>
        </>
    )
}

export default ParkDetail

