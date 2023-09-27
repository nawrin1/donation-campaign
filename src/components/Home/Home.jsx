import { useLoaderData } from "react-router-dom";
import AllJobs from "../AllJobs/AllJobs";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";


const Home = () => {
    const jobs= useLoaderData()
    const [val,setVal]=useState('')
    const[data,setData]=useState([])
    const [con,setCon]=useState(false)
    const handleClick=(value)=>{
        setVal(value)

    }

    useEffect(()=>{
        const newArray= jobs.filter(job=>job.necessity==val)
        setData(newArray)
        if (newArray.length>0){
            setCon(true)
        }
        else{
            setData(jobs)
        }

        
        
    
        

    },[jobs, setCon, val])
    console.log(data)


    
    return (
        <div>
                <Banner handleClick={handleClick}></Banner>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-4 lg:mx-auto gap-4 mt-8">
                    {
                        con?data.map((job,idx)=><AllJobs key={idx} job={job}></AllJobs>): jobs.map((job,idx)=><AllJobs key={idx} job={job}></AllJobs>)      
                    }

                    
                </div>
        </div>
    );
};

export default Home;