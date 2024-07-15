import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const slide = {
    initial: {
      x: 1300,
      opacity: 0,
    },
    animate: {
      x: 1200,
      opacity: 1,
      transition: {
        duration: 1,
        transition: { type: "spring", stiffness: 200, damping: 500 },
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_API_PUBLIC_KEY
      )
      .then((res) => {
        console.log("email sent successfully", res.status);
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full h-svh bg-primary flex flex-col md:flex-row   ">
      {sent && (
        <motion.div
          variants={slide}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ duration: 2.5 }}
          className="absolute w-[110px] m-10 h-[50px] bg-secondary rounded-lg font-varena text-white p-2"
        >
          {" "}
          Email Sent !{" "}
        </motion.div>
      )}

      <div className="md:w-1/3 w-full flex  flex-col items-center justify-center h-full bg-secondary p-10">
        <h1 className="font-sora font-bold text-primary text-5xl">
          Get in Touch
        </h1>
        <p className="font-varena text-primary pt-8 text-lg ">
          alvarengamauricio7@gmail.com <br></br>
          feel free to reach out through my socials!
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mauricioalvarenga/"
        >
          <FaLinkedin className="w-full h-10 text-primary flex mt-10 cursor-pointer hover:scale-125 duration-300 transition-al" />
        </a>
      </div>
      <div className="w-full h-full flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center  w-4/5 "
        >
          <div className="flex flex-col w-full lg:w-2/3 h-full p-2">
            <label
              className=" text-secondary font-varena pt-3 pb-3 text-lg "
              htmlFor="name"
              name="name"
            >
              Name :
            </label>
            <input
              className="h-[34px] rounded-lg text-black p-2 border-2 bg-primary border-secondary"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label
              className=" text-secondary font-varena pt-3 pb-3 text-lg "
              htmlFor="email"
            >
              Email :
            </label>
            <input
              className="h-[34px] rounded-lg text-black p-2 border-2 bg-primary border-secondary"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label
              className=" text-secondary font-varena pt-3 pb-3 text-lg"
              htmlFor="message"
            >
              Message :
            </label>
            <textarea
              className="h-[200px] rounded-lg text-black p-2 border-2 bg-primary border-secondary "
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              className="bg-secondary w-[100px] h-[50px] mt-4 rounded-lg text-primary fopt-varena cursor-pointer hover:scale-110 duration-300 transition-all"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
