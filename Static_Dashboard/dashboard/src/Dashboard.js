import Reviews from './Reviews';
import Analysis from './Analysis';
import Rating from './Rating';
import Visitors from './Visitors';
import './Dashboard.css';


function Dashboard() {
    return (
        <div className='container'>
            <Reviews />
            <Rating />
            <Analysis />
        </div>
    );
}

export default Dashboard;