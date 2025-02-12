import axios from "axios"
import { useEffect, useState } from "react"


const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {

        axios.get('http://localhost:5500/get-all-users')
            .then((response) => {
                setUsers(response.data)
                console.log('this is response', response)
            }).catch((error) => {
                console.log('this is error', error)
            })

    }, [])




    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users
