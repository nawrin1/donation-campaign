import { useState } from 'react';
import './Banner.css'


const Banner = ({handleClick}) => {
    // const [value,setValue]=useState('')
    const Text=e=>{
        e.preventDefault()

        console.log(e.target.text.value)
       
        handleClick(e.target.text.value)
        
    }
    return (
        <div className=''>
            <div className="banner flex flex-col justify-center items-center gap-[35px] h-[50vh] banner">
                <h1 className=" text-[25px] font-Inter lg:text-[48px] font-[700]">I Grow By Helping People In Need</h1>
                <form className ="flex items-center "action="" onSubmit={Text}>
                    <input className="w-full md:w-[2o0px] lg:w-[400px] h-full p-[14px] border-2 border-[#DEDEDE] rounded-l-[8px]" name="text" placeholder="Search here..."type="text" />
                    <input className="w-[110px] h-[52px] text-[white] bg-[#FF444A] rounded-r-[8px] "name="submit" type="submit" value="Search" />

                </form>

            </div>
            
        </div>
    );
};

export default Banner;