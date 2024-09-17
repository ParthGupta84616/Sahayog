// import React from "react";
// import { FaHospitalUser, FaUsers } from 'react-icons/fa';
// import { IoIosArrowForward } from 'react-icons/io';

// const HighlightCard = ({ icon, title, value }) => (
//   <div className="p-4 md:w-1/3">
//     <div className="flex rounded-2xl h-full border-2 border-[#5f6d6d]  bg-[#72a0a0] p-8 flex-col">
//       <div className="flex items-center mb-3">
//         <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
//           {icon}
//         </div>
//         <div>
//           <h2 className="text-gray-900 text-lg title-font font-medium">
//             {title}
//           </h2>
//           <p className="leading-relaxed text-base">{value}</p>
//         </div>
//       </div>
//       <div className="flex-grow">
//         <a href='/' className="mt-3 text-indigo-500 inline-flex items-center">
//           {" "}
//           More
//           <IoIosArrowForward className="w-4 h-4 ml-2" />
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const Highlight = () => {
//   return (
//     <div>
//       {/* Highlights  */}
//       <section className="text-gray-600 bg-gray-100 body-font">
//         <div className="container px-10 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
//               Highlights
//             </h1>
//             <hr className="mt-6 mx-auto w-1/3" />
//           </div>
//           <div className="flex flex-wrap -m-4">
//             <HighlightCard
//               icon={<FaHospitalUser />}
//               title="Number of Hospitals"
//               value="716"
//             />
//             <HighlightCard
//               icon={
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-5 h-6"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                 </svg>
//               }
//               title="Online Appointments Taken Today"
//               value="3331"
//             />
//             <HighlightCard
//               icon={<FaUsers />}
//               title="Total Online Appointments"
//               value="10098207"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Highlight;

import React from "react";

const Highlight = () => {
  return (
    <div>
      {/* Highlights  */}
      <section class="text-gray-600 body-font">
        <div class="container px-10 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Highlights
            </h1>
            <hr className="mt-6 mx-60" />
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {/* <FaHospitalUser /> */}
                  </div>
                  <div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Number of Hospitals
                    </h2>
                    <p class="leading-relaxed text-base">716</p>
                  </div>
                </div>
                <div class="flex-grow">
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    {" "}
                    More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Online Appointments Taken Today
                    </h2>
                    <p class="leading-relaxed text-base">3331</p>
                  </div>
                </div>
                <div class="flex-grow">
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    {" "}
                    More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {/* <FaUsers /> */}
                  </div>
                  <div className="">
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Total Online Appointments
                    </h2>
                    <p class="leading-relaxed text-base">10098207</p>
                  </div>
                </div>
                <div class="flex-grow">
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    {" "}
                    More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlight;
