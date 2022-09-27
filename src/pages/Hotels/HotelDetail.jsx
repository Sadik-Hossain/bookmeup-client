import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hooks/useFetch";
import img1 from "../../assets/img1.jpg";
import ReactStars from "react-stars";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchContext } from "../../context/SearchContext";
import Map from "../../components/Map/Map";

// const Gallery = () => {
//   return (
//     <div>
//       <section class="overflow-hidden text-gray-700">
//         <div class=" px-5 py-2 mx-auto lg:pt-24 lg:px-32">
//           <div class="flex flex-wrap -m-1 md:-m-2">
//             <div class="flex flex-wrap w-1/2">
//               <div class="w-1/2 p-1 md:p-2">
//                 <img
//                   alt="gallery"
//                   class="block object-cover object-center w-full h-full rounded-lg"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
//                 />
//               </div>
//               <div class="w-1/2 p-1 md:p-2">
//                 <img
//                   alt="gallery"
//                   class="block object-cover object-center w-full h-full rounded-lg"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
//                 />
//               </div>
//               <div class="w-full p-1 md:p-2">
//                 <img
//                   alt="gallery"
//                   class="block object-cover object-center w-full h-full rounded-lg"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
//                 />
//               </div>
//             </div>
//             <div class="flex flex-wrap w-1/2">
//               <div class="w-full p-1 md:p-2">
//                 <img
//                   alt="gallery"
//                   class="block object-cover object-center w-full h-full rounded-lg"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
//                 />
//               </div>
//               <div class="w-1/2 p-1 md:p-2">
//                 <img
//                   alt="gallery"
//                   class="block object-cover object-center w-full h-full rounded-lg"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
//                 />
//               </div>
//               <div class="w-1/2 p-1 md:p-2">
//                 <img
//                   alt="gallery"
//                   class="block object-cover object-center w-full h-full rounded-lg"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// const Pricing = () => {
//   return (
//     <section class="text-gray-600 body-font">
//       <div class="container px-5 py-24 mx-auto">
//         <div class="flex flex-col text-center w-full mb-20">
//           <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
//             Pricing
//           </h1>
//           <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
//             Banh mi cornhole echo park skateboard authentic crucifix neutra
//             tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
//             twee
//           </p>
//         </div>
//         <div class="lg:w-2/3 w-full mx-auto overflow-auto">
//           <table class="table-auto w-full text-left whitespace-no-wrap">
//             <thead>
//               <tr>
//                 <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
//                   Plan
//                 </th>
//                 <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
//                   Speed
//                 </th>
//                 <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
//                   Storage
//                 </th>
//                 <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
//                   Price
//                 </th>
//                 <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td class="px-4 py-3">Start</td>
//                 <td class="px-4 py-3">5 Mb/s</td>
//                 <td class="px-4 py-3">15 GB</td>
//                 <td class="px-4 py-3 text-lg text-gray-900">Free</td>
//                 <td class="w-10 text-center">
//                   <input name="plan" type="radio" />
//                 </td>
//               </tr>
//               <tr>
//                 <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
//                 <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
//                 <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
//                 <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
//                   $24
//                 </td>
//                 <td class="border-t-2 border-gray-200 w-10 text-center">
//                   <input name="plan" type="radio" />
//                 </td>
//               </tr>
//               <tr>
//                 <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
//                 <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
//                 <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
//                 <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
//                   $50
//                 </td>
//                 <td class="border-t-2 border-gray-200 w-10 text-center">
//                   <input name="plan" type="radio" />
//                 </td>
//               </tr>
//               <tr>
//                 <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
//                   Exclusive
//                 </td>
//                 <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
//                   48 Mb/s
//                 </td>
//                 <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
//                   120 GB
//                 </td>
//                 <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
//                   $72
//                 </td>
//                 <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
//                   <input name="plan" type="radio" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
//           <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//             Learn More
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               class="w-4 h-4 ml-2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//             Button
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

const HotelDetail = () => {
  const a = useContext(SearchContext);
  const day = 1000 * 60 * 60 * 24;

  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now() + day);
  const onChange = (dates) => {
    const [start, end] = dates;
    console.log(start, end);
    const a = new Date(start).getTime();
    const b = new Date(end).getTime();
    setStartDate(start);
    setEndDate(end);
    // console.log(a, b);
  };
  const params = useParams();
  const { id } = params;
  const { data, loading, error } = useFetch(`/api/hotel/${id}`);
  console.log(data);
  const {
    _id,
    HotelName,
    address,
    cheapestPrice,
    city,
    country,
    desc,
    featured,
    photos,
    rating,
    rooms,
  } = data;
  const duration = (endDate - startDate) / day;

  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div>
      {/* <h1>HotelDetail for : {id}</h1> */}
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        <>
          {data && (
            <>
              <div className="relative  text-white flex justify-center items-center">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-80 object-cover object-center brightness-75"
                />
                <div className="absolute bottom-0 text-3xl font-bold backdrop-brightness-50 backdrop-blur-sm p-8 w-full flex flex-wrap justify-between ">
                  <h1>{HotelName}</h1>
                  <div className="flex items-center">
                    <b>ratings:&nbsp;</b>&nbsp;
                    <ReactStars
                      count={5}
                      size={24}
                      color2={"#ffd700"}
                      value={rating}
                      edit={false}
                      half={true}
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold my-8 ml-4">
                Details about the hotel:
              </h1>
              <div className="flex flex-wrap md:flex-row gap-6 my-3 mx-4">
                <div className="p-4 leading-8 lg:w-1/2 md:w-1/2 w-full lg:ml-4 border  border-slate-300 rounded-md shadow-lg">
                  <h1 className="text-xl my-2">
                    <b>country:&nbsp;</b>
                    {country}
                  </h1>
                  <h1 className="text-xl my-2">
                    <b>city:&nbsp;</b>
                    {city}
                  </h1>
                  <h1 className="text-xl my-2">
                    <b>address:&nbsp;</b>
                    {address}
                  </h1>
                  <h1 className="text-xl my-2">
                    <b>price:&nbsp; </b>${cheapestPrice}
                  </h1>

                  <h1 className="text-xl my-2">
                    <b>description:&nbsp;</b>
                    {desc}
                  </h1>
                </div>
                <div className=" flex-grow   border border-slate-300 rounded-md shadow-lg p-4">
                  <label
                    htmlFor="date"
                    className={`leading-7 text-md  ${
                      !startDate || !endDate
                        ? "text-red-600 font-bold"
                        : "text-black"
                    }`}
                  >
                    Pick a Date:
                  </label>
                  <div>
                    <DatePicker
                      className="z-99 block border-2 border-black text-xl lg:px-4 rounded leading-6 p-2 outline-green-400 sm:flex-grow w-full md:w-full "
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      selectsRange
                      placeholderText="Click to select a date"
                      isClearable={true}
                      required={true}
                      dateFormat="dd/MM/yyyy"
                    />
                    <div className="p-3">
                      <div className="flex justify-between">
                        <h1 className="text-center text-xl my-3">
                          per day cost:
                        </h1>
                        <h1 className="text-center text-xl my-3">
                          {cheapestPrice}
                          <b> $</b>
                        </h1>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="text-center text-xl my-3">
                          Total stay:
                        </h1>
                        <h1 className="text-center text-xl my-3">
                          {duration > 0 ? duration : "--"} day(s)
                        </h1>
                      </div>{" "}
                      <div className="border-b border-black"></div>
                      <div className="flex justify-between">
                        <h1 className="text-center text-xl my-3">
                          Total cost:
                        </h1>
                        <h1 className="text-center text-xl my-3">
                          {duration > 0 ? cheapestPrice * duration : "--"}&nbsp;
                          <b>$</b>
                        </h1>
                      </div>
                      <button
                        onClick={handleClick}
                        className="text-white bg-indigo-500 border-0 py-2 px-8 mt-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full active:scale-[0.967] disabled:bg-slate-400 disabled:cursor-not-allowed disabled:scale-[1]"
                        disabled={!endDate}
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <Gallery />
              <Pricing /> */}
              <div className="flex justify-center items-center border mt-[10rem]">
                <Map />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HotelDetail;
