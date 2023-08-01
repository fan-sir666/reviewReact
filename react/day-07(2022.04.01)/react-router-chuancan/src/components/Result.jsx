import React from 'react'
import { useLocation } from 'react-router-dom'

function Result(props) {
    console.log(props);
    const {state} = useLocation()
    // console.log(state);
    return (
        <div>Result  {state.name}-----{state.age}</div>
    )
}

export default Result