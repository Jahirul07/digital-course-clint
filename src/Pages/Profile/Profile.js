import React,{useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='text-center'>
            <h5>Name: {user?.displayName}</h5>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;