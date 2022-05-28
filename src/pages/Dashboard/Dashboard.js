import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center my-10">
                    <h2 className='text-3xl font-bold text-primary'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">dashboard-sidebar</label>
                
                </div> 
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                    <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                    </ul>
                
                </div>
        </div>
    );
};

export default Dashboard;