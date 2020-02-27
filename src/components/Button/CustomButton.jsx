import React from 'react'
import {Link} from 'react-router-dom'


export const CustomButton =() => {
    return(
        <>
        <Link to='../Project/AddProject' className='btn btn-lg btn-info'>
            Create a project               
        </Link>
        </>
    )
}