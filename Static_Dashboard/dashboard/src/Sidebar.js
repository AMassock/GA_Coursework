import './Sidebar.css';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <ul>
                <li><a href='#'>Dashboard</a></li>
                <li><a href='#'>Widget</a></li>
                <li><a href='#'>Reviews</a></li>
                <li><a href='#'>Customers</a></li>
                <li><a href='#'>Online Analysis</a></li>
                <li><a href='#'>Settings</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;