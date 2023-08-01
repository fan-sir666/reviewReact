import React, { useContext } from 'react'
import { UserContext } from '../Context'
function UserNameInput() {
    const { userName, setUserName } = useContext(UserContext)
    return (
        <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
    )
}

export default UserNameInput