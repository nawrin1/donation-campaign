import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import localstorage from "../../utility/localstorage";


const DonationDetails = () => {
    const handleClick=(newArray)=>{
        localstorage(newArray)

    }
    const {id}=useParams()
    console.log(id)
    const [array, setArray]=useState([])
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res=>res.json())
        .then(data=>setArray(data))
    },[])
    console.log(array)
    const newArray=array.length>0?array.find(jobs=>jobs.necessity==id):''
    if(newArray){
        const {image,color,title,description,donation_amount}=newArray
        console.log(image,color,title,description)
    
    
    
        const {background_color,text_bg,text_color}=color
        console.log(color)
        console.log(background_color,text_bg,text_color)

        return (
            <div className="mt-16 ">
                <div className="relative">
                    <div style={{backgroundImage:`url(${image})`}} className="lg:h-[700px] rounded-[8px] mx-auto lg:mx-auto w-[400px] h-[200px] lg:w-[1100px] bg-cover bg-no-repeat">
                        <div className="">
                            <div className="h-[130px] bg-black bg-blend-overlay opacity-30 lg:w-[1100px] absolute bottom-[0px]">
                            </div>
                            <button onClick={()=>handleClick(newArray)}style={{backgroundColor:`${text_color}`}} className="text-[white] w-[180px] h-[55px] rounded-[4px]  absolute bottom-[40px] right-[950px]">Donate${donation_amount}</button>
                        </div>
        
        
                    </div>
                    
                </div>
                <div className="mt-[56px] mx-auto lg:mx-auto w-[400px] h-[200px] lg:w-[1100px]">
                    <h2 className="text-[40px] font-[700]">{title}</h2>
                    <p className="text-[16px] font-[400] text-[ rgba(11, 11, 11, 0.70)] mt-[24px] ">{description}</p>
    
                </div>
                
            </div>
        );

    }
    // const {image,color,title,description,donation_amount}=newArray
    // console.log(image,color,title,description)
    
    
    
    // const {background_color,text_bg,text_color}=color
    // console.log(color)
    // console.log(background_color,text_bg,text_color)
  
    
    // return (
    //     <div className="mt-16 ">
    //         <div style={{backgroundImage:`url(${image})`}} className="lg:h-[700px] rounded-[8px] mx-auto lg:mx-auto w-[400px] h-[200px] lg:w-[1100px] bg-cover bg-no-repeat">
    //             <div className="h-[130px]">
    //                 <button style={{backgroundColor:`${text_color}`}} className="text-[white] ">Donate${donation_amount}</button>

    //             </div>


    //         </div>
    //         <div className="mt-[56px] mx-auto lg:mx-auto w-[400px] h-[200px] lg:w-[1100px]">
    //             <h2 className="text-[40px] font-[700]">{title}</h2>
    //             <p className="text-[16px] font-[400] text-[ rgba(11, 11, 11, 0.70)] mt-[24px] ">{description}</p>

    //         </div>
            
    //     </div>
    // );
};

export default DonationDetails;