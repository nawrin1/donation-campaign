import { useEffect, useState } from "react";
import { getArray } from "../../utility/locals";
import Donates from "../Donates/Donates";
import NoDonation from "../NoDonation/NoDonation";


const Donation = () => {
    const [arr,setArr]=useState([])
    
    useEffect(()=>{
        const array=getArray()
        console.log(array)
        if(array.length>0){
            setArr(array)
            console.log(arr)
        }
    },[])




    return (
        <div className="">
            {
                arr.length>0?<Donates arr={arr}></Donates>:<NoDonation></NoDonation>
            }




            
        </div>
    );
};

export default Donation;