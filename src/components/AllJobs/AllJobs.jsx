import { Link } from "react-router-dom";


const AllJobs = ({job}) => {
    console.log(job)
    const {image, necessity, title, color}=job
    const {background_color,text_bg,text_color}=color
    
    return (
        <Link to={`/home/${necessity}`}>
            <div className="rounded-[8px]">
                <div >
                    <img className= "w-full"src={image} alt="" />
                </div>
                <div style={{backgroundColor:`${background_color}`}} className="p-4 rounded-b-[8px]">
                    <div style={{backgroundColor:`${text_bg}`}} className="w-[70px] h-[25px] rounded-[4px] text-center">
                        <h1 style={{color:`${text_color}`}} className="text-[14px] font-Inter font-[500]">{necessity}</h1>
                    </div>
                    <p style={{color:`${text_color}`}} className="text-[18px] font-Inter font-[600]">{title}</p>

                </div>
            </div>
        </Link>

    );
};

export default AllJobs;