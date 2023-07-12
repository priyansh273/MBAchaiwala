import React from 'react'
import logo from "../Assets/logo.png"
import {BsMouse} from "react-icons/bs";

const Misc = ()=>{
    return(
        <>
        <div className='cursor'></div>
        <a href="/" className='logo'>
        <img src={logo} alt="logo" data-cursorpointer={true} />
        </a>  <a href="/franchise" className='franchisebtn' data-cursorpointer={true}>GET A FRANCHISE </a>
        <BsMouse className="scrollbtn" />
        </>
    )
}

export default Misc;