import { useLoaderData } from "react-router-dom";
import AllJobs from "../AllJobs/AllJobs";


const Home = () => {
    const jobs= useLoaderData()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-4 lg:mx-auto gap-4 mt-8">
            {
                jobs.map((job,idx)=><AllJobs key={idx} job={job}></AllJobs>)
            }

            
        </div>
    );
};

export default Home;