import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();

    const { logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <p className='font-bold text-error'>Something Went Wrong</p>
            <p className='font-bold text-error'>{error.statusText} || {error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogout} className='btn btn-accent' to="/login">Sign Out</button>and Log Back In.</h4>
        </div>
    );
};

export default DisplayError;