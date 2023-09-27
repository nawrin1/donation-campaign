import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { localstorage } from "../../utility/locals";
import Swal from 'sweetalert2'



const DonationDetails = () => {
    const handleClick=(newArray)=>{
        
        localstorage(newArray)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have donated',
            showConfirmButton: false,
            timer: 1500
          })

    }
    const {id}=useParams()
    console.log(id)
    const [array, setArray]=useState([])
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res=>res.json())
        .then(data=>setArray(data))
    },[])
    
    const newArray=array.length>0?array.find(jobs=>jobs.necessity==id):''
    if(newArray){
        const {image,color,title,description,donation_amount}=newArray
        
    
    
    
        const {text_color}=color
        

        return (
            <div className="mt-32 ">
                <div className="relative">
                    <div style={{backgroundImage:`url(${image})`}} className="lg:h-[700px] rounded-[8px] mx-auto lg:mx-auto w-[400px] h-[200px] lg:w-[1100px] bg-cover bg-no-repeat">
                        <div className="">
                            <div className="lg:h-[130px] w-[400px] top-[160px] h-[40px] md:h-[50px] bg-black bg-blend-overlay opacity-40 md:top-[150px] md:w-[400px] lg:w-[1100px] absolute lg:top-[570px]">
                            </div>
                            <button onClick={()=>handleClick(newArray)}style={{backgroundColor:`${text_color}`}} className="text-[white] font-[600] font-Inter text-[14px] w-[100px] lg:text-[20px] md:text-[16px] lg:w-[180px] lg:h-[55px] md:w-[120px] md:h-[30px] md:ml-[20px] rounded-[4px]  absolute lg:bottom-[40px] md:bottom-[11px] lg:right-[950px] bottom-[8px] ml-[10px]">Donate${donation_amount}</button>
                        </div>
        
        
                    </div>
                    
                </div>
                <div className="mt-[56px] mx-auto lg:mx-auto w-[400px] h-[200px] lg:w-[1100px]">
                    <h2 className="text-[40px] font-Inter font-[700]">{title}</h2>
                    <p className="text-[16px] font-Inter font-[400] text-[#424141] mt-[20px] ">{description}</p>
    
                </div>
                
            </div>
        );

    }

};

export default DonationDetails;