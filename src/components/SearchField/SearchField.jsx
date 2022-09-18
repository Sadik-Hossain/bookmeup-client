import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchField.css";
import { countries } from "../../../public/country";
import Range from "./rangeSlider/Range";
import axios from "axios";

const SearchField = () => {
  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(0);
  const onChange = (dates) => {
    const [start, end] = dates;
    const a = new Date(start).getTime();
    const b = new Date(end).getTime();
    setStartDate(start);
    setEndDate(end);
    console.log(a, b);
  };
  const handleChange = (e) => {
    setPlace(e.target.value);
  };
  const [min1, setMin1] = useState(0);
  const [max1, setMax1] = useState(0);
  const handleRange = ({ min, max }) => {
    setMin1(min);
    setMax1(max);
  };
  console.log(`min = ${min1}, max = ${max1}`);

  const handleClick = async (e) => {
    e.preventDefault();
    const a = new Date(startDate).getTime();
    const b = new Date(endDate).getTime();
    console.log(place, a, b, min1, max1);

    const result = await axios.get(
      `http://localhost:5000/api/hotel?country=${place}&min=${min1}&max=${max1}&startdate=${a}&enddate=${b}`
    );
    console.log(result.data);
  };
  //* var one_day = 1000 * 60 * 60 * 24
  //* day calc = (b-a)/one_day
  return (
    <section className="text-gray-600 ">
      <div className="px-2  mx-auto">
        <div className="rounded-lg bg-green-400 flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full p-3">
            <label for="country" className="leading-7 text-sm text-black">
              Enter Country:
            </label>
            <input
              type="text"
              list="e"
              id="full-name"
              name="full-name"
              className="w-full  rounded border  border-black outline-green-400  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
            <datalist id="e">
              {countries.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </datalist>
          </div>
          <div className="relative flex-grow w-full p-3">
            <label
              for="date"
              className={`leading-7 text-sm ${
                !startDate || !endDate ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Pick a Date:
            </label>
            <div className="z-99">
              <DatePicker
                className="z-99 block border text-xs lg:px-4 rounded  border-black leading-6 py-2 outline-green-400 sm:flex-grow w-full md:w-full "
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
            </div>
          </div>
          <div className="relative flex-grow w-full p-3 ">
            <label className="leading-7 text-center text-sm text-black ">
              price range:&nbsp;
            </label>

            {/* <input
              type="range"
              id="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="price"
              value={range}
              min="100"
              step="100"
              max="5000"
              placeholder="price"
              onChange={handleRange}
            /> */}

            <Range min={0} max={1000} onChange={handleRange} />
          </div>
          <div className="p-3 w-full self-center">
            <button
              onClick={handleClick}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full active:scale-[0.967]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchField;

// const SearchField = () => {
//   const [place, setPlace] = useState("");
//   const [range, setRange] = useState(100);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(0);
//   const onChange = (dates) => {
//     const [start, end] = dates;
//     const a = new Date(start).getTime();
//     const b = new Date(end).getTime();
//     setStartDate(start);
//     setEndDate(end);
//     console.log(a, b);
//   };
//   const handleChange = (e) => {
//     setPlace(e.target.value);
//   };
//   const handleRange = (e) => {
//     setRange(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const a = new Date(startDate).getTime();
//     const b = new Date(endDate).getTime();
//     console.log(place, a, b, range);
//   };
//   //* var one_day = 1000 * 60 * 60 * 24
//   //* day calc = (b-a)/one_day
//   return (
//     <div className="bg-green-400 rounded-[1.2rem] border border-black p-5 w-[90%] mx-auto mb-[-4rem] z-10 absolute bottom-0 right-0 left-0 sm:relative shadow-xl">
//       <form onSubmit={handleSubmit}>
//         <div className=" flex lg:justify-evenly lg:items-stretch  md:justify-evenly  sm:flex-col md:flex-col">
//           <div className="relative flex-grow w-full p-3">
//             <label htmlFor="place">Enter Country:</label>
//             <input
//               list="e"
//               name="place"
//               placeholder="Enter country"
//               className="block border border-black leading-6 p-3 outline-green-400 sm:w-full md:w-full "
//               value={place}
//               onChange={handleChange}
//             />
//             <datalist id="e">
//               {countries.map((e, i) => (
//                 <option key={i}>{e}</option>
//               ))}
//             </datalist>
//           </div>
//           <div className="relative flex-grow w-full p-3">
//             <label>Enter date:</label>
//             <div>
//               <DatePicker
//                 className="block border border-black leading-6 p-3 outline-green-400  px-9 sm:w-full md:w-full"
//                 selected={startDate}
//                 onChange={onChange}
//                 startDate={startDate}
//                 endDate={endDate}
//                 minDate={new Date()}
//                 selectsRange
//                 placeholderText="Click to select a date"
//                 isClearable={true}
//                 required={true}
//                 dateFormat="dd/MM/yyyy"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="price">Enter price range:&nbsp;</label>

//             <input
//               type="range"
//               name="price"
//               value={range}
//               min="100"
//               step="100"
//               max="5000"
//               placeholder="price"
//               className="block border border-black leading-6 p-3 outline-green-400 sm:w-full md:w-full "
//               onChange={handleRange}
//             />

//             <output className="block">{range}$/day</output>
//           </div>

//           <div className="flex justify-center items-center border border-black gap-3 active:scale-[0.934] transition-all ease-linear duration-75 py-0 px-3 h-10 self-center bg-white sm:w-full md:w-full">
//             <input
//               type="submit"
//               value="search"
//               className="block  leading-6  outline-green-400 "
//             />
//             <FiSearch />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
