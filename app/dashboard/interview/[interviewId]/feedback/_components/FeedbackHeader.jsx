import Image from "next/image";
import React from "react";
// import home from "../../assets/h3.jpg";
// import Vector from "../../assets/vector3.png";
// import { MdOutlineDesignServices } from "react-icons/md";
// import { FaHome } from "react-icons/fa";
// import { FaAutoprefixer } from "react-icons/fa";
import feedback from '@/public/feedback1.png'

const FeedbackHeader = () => {
//   const bgImage = {
//     backgroundImage: `url(${Vector})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };
  return (
    <>
      <div  id="about">
        <div className=" flex justify-center items-center backdrop-blur-xl sm:py-0 ">
          <div
            data-aos="slide-up"
            // data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-green-500">Congratulations</h1>
                <h2 className="font-bold text-2xl">Here is your Interview Feedback</h2>


      
      <h2 className="text-sm text-gray-500">
        Find below interview question with correct answer, Your answer and
        feedback for improvement
      </h2>
                {/* <div className="flex gap-6">
                  <div>
                    <MdOutlineDesignServices className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <FaHome className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <FaAutoprefixer className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div> */}
              </div>

               {/* Image section */}
               <div className="ml-5">
               <Image src={feedback}  width={400}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackHeader;