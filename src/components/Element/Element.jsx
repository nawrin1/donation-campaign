

const Element = ({element}) => {
    console.log(element,"oooo")
    const{image,necessity,title,color,description,donation_amount}=element;
    const {background_color,text_bg,text_color}=color
    console.log(image)
    
    return (
        <div className="card card-side  rounded-[8px]">
            <figure><img src={image} className=" w-[200px] h-[255px] lg:w-[240px] lg:h-[240px] md:w-[240px] md:h-[240px]" alt=""/></figure>
            <div className="card-body  rounded-r-[8px] " style={{backgroundColor:`${background_color}`}}>
                <div style={{backgroundColor:`${background_color}`}} className="w-[50%] md:w-[30%] text-center ">
                    <h2 className="text-center" style={{color:`${text_color}`}}>{necessity}</h2>
                </div>
                <p className="text-[21px] font-[600]">{title}</p>
                <p style={{color:`${text_color}`}} className="text-[16px] font-[600] lg:mb-2 md:mb-2">${donation_amount}.00</p>
                <div className=" justify-start">
                    <button style={{backgroundColor:`${text_color}`}} className="btn text-[white]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Element;