import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
function AuthRoute({children}) {
    const token = useSelector((state) => state.user.token)
    if (!token) {
        return <Navigate to='/login' />
    }
    return children;
}

export default AuthRoute