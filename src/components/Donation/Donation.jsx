import { useState } from "react";
import { getArray } from "../../utility/localstorage";


const Donation = () => {
    const [arr,setArr]=useState([])
    const get=getArray()
    setArr([...arr,get])
    console.log(arr)

    return (
        <div>
            <h2>donate</h2>

            
        </div>
    );
};

export default Donation;