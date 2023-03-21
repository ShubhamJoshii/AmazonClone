import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SigninPage.css"
 const SigninPage = () =>{
    const navigate = useNavigate();
    return(
        <div className='pb-7 bg-white'>
        <div className='grid text-center text-xs space-y-1 pt-[30px] pb-[15px] justify-center border border-[#00000043]'>
            <h1 className='font-semibold  '>See personalized recommendations</h1>
            <button className='SignBtn w-[230px] h-[27px] text-xs font-semibold border-[#E6A400]    
            rounded-lg ' onClick={()=>navigate("/signin")}>Sign in</button>
            <p>New customer? <span className='text-blue-700 font-semibold cursor-pointer' onClick={()=>navigate("/register")}>Start here.</span></p>
        </div>
        </div>
    )
 }

export default SigninPage;