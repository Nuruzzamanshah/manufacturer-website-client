import React from 'react';
import {QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from '../Loading';

const Users = () => {
    
    const {data: users, isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    const queryClient = new QueryClient();
    if(queryClient){
        return <QueryClientProvider client={queryClient} contextSharing={true}>{users.length}</QueryClientProvider>
    }
    return (
       <div>
            <h2 className='text-2xl'>All Users: {users.length}</h2>
        </div>
        
    );
};

export default Users;