import React ,{useState,useEffect}from "react"
const Nav = () => {
  const [open ,setOpen] = useState(false);
  const navAnimate = {
   open:{
    clipPath: "circle(1200px at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:20,
    }
   },
   closed:{
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay:0.5,
      type: "spring",
      stiffness:400,
      damping:40,
    }
   }
  }
  const items = ["Contact","Home"]
  return (
    <div className="w-full flex justify-center bg-primary ">
      <div className="w-[95%]  h-[100px] flex items-center justify-start    border-b-2  border-black">
        <h1 className=" font-ronaldson text-2xl  absolute">Mauricio Alvarenga</h1>
      </div>
    </div>
  );
};
export default Nav;