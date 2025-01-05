import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'





const Dashboard = () => {

    const user = useContext(UserContext);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <h1 style={{ textAlign: 'center' }}>User Dashboard</h1>
                <table className='border-collapse border border-black' style={{ margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <td className='border border-black'>Name</td>
                            <td className='border border-black'>Age</td>
                            <td className='border border-black'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-black'>{user.name}</td>
                            <td className='border border-black'>{user.age}</td>
                            <td className='border border-black'>{user.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
