import { useState } from "react";
import Element from "../Element/Element";


const Donates = ({arr}) => {
    console.log(arr,"aaa")
    const [length,setLength]=useState(4)
    const[button,setButton]=useState('See All')
    const[btn,setBtn]=useState(true)
    const handleShow=(btn)=>{
        setBtn(!btn)
        if (btn){
            setButton("Show All")
            setLength(4)
    
    
        }
        else{
            setButton("See Less")
            setLength(arr.length)
        }
    }

    
    
    

    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[1100px] lg:mx-auto mx-4 gap-4 mt-20"> 
            {
                arr.slice(0,length).map(element=><Element element={element}></Element>)
            }
            <div className="bg-[#009444] w-[110px] h-[40px] text-[white] rounded-[4px] text-center mt-4 pt-[8px] justify-center items-center mx-auto lg:ml-[490px]">
                <button onClick={()=>handleShow(btn)}>{button}</button>
            </div>


                
  
            
            
            
            
            
        </div>
    );
};

export default Donates;