import React, { useContext } from 'react'
import { UserContext } from '../Context'
function UserInfo() {
    const { userName } = useContext(UserContext)
    return (
        <div>{`UserInfo  -> ${userName}`}</div>
    )
}

export default UserInfo