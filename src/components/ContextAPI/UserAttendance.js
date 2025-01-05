import React from 'react'
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

const UserAttendance = () => {

    const user = useContext(UserContext);

    console.log(user)

    let attendance = 0;
    return (
        <div className='p-16 flex flex-col items-center'>
            <h1 className='text-3xl mb-4'>User Attendance: {user.status}</h1>
            <div className='flex justify-center'>
                <button

                    onClick={() => {
                        user.setStatus('Absent');
                    }}

                >Absent</button>
                <button onClick={() => {
                    user.setStatus('Present');
                }}>Present</button>
            </div>
        </div>
    )
}

export default UserAttendance
