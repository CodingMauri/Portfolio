/* eslint-disable react/prop-types */
 const ProjectCard = ({ project, index ,mobile}) => {


  return (
    <div
      className="flex flex-col w-[85%] h-svh overflow-hidden border-2 border-secondary m-10 hover:scale-105 transition-all duration-500"
      key={index}
    >
      <div className="w-full min-h-[300px] md:min-h-[350px] lg:min-h-[500px]  bg-red-500">
        <img
          className="w-full h-full object-cover"
          src={project.img}
          alt="project-pic"
        />
      </div>
      <div className="w-full h-full flex flex-col p-5 ">
        <h1 className="text-2xl h-[50px] font-sora font-bold border-b-2 border-b-secondary mb-6">
          {project.project}
        </h1>
        <p className = "text-sm font-varena leading-normal">
          {project.description.length > (mobile ? 330:250)
            ? project.description.slice(0, mobile ? 330:250) + "..."
            : project.description}{" "}
        </p>
        <div className="w-full flex items-center gap-10 h-[100px]  ">
          <a className=" m-1 w-[130px] h-[40px]  rounded-full bg-secondary text-primary flex items-center justify-center  font-sora text-lg hover:scale-110 cursor-pointer transition-all ">
            Github
          </a>
          {project.link &&
          <a className=" m-1 w-[130px] h-[40px]  rounded-full bg-primary border-2 border-secondary text-secondary flex items-center justify-center  font-sora text-lg hover:scale-110 cursor-pointer transition-all ">
            Live
          </a>
          }
        </div> 
      </div>
    </div>
  );
};
export default ProjectCard;