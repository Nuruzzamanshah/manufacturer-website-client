import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center my-10">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl font-bold text-primary'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">dashboard-sidebar</label>
                
                </div> 
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    </ul>
                
                </div>
        </div>
    );
};

export default Dashboard;