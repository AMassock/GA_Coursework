import React from 'react'; 
import {Link} from 'react-router-dom';
import './Home.css';
import ParkDetail from './ParkDetail';

export default function Home (){

    const url = 'https://developer.nps.gov/api/v1/parks?api_key=I82Mcb3FSJEOffFxQDVAgDZxtF5JSLYcv6n0QWlG'
    const [parkList, setParkList] = useState([])
  
    useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setParkList(data.data))
      .catch((err) => console.log('oop something went wrong', err))
    },[])
    
    if (!parkList) {
        return <></>
    }

    const parkIcons = parkList.map((park, i) => {
        return (
            <Link key={i} to={`/park/${park.parkCode}`}>
                <div className="park-preview">
                    <img className="park-img" alt={park.fullName}
                        src={park.images[0] ? park.images[0].url : "https://i.pinimg.com/originals/90/5b/d0/905bd03c111f41c8f656e04f71b42ad8.png"}/>
                    <p className="img-text">{park.fullName}</p>
                </div>
            </Link>
        );
    });
    return <div className="all-parks">{parkIcons}</div>;
}