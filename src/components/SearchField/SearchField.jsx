import React, { forwardRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchField.css";
import { countries } from "../../../public/country";

// const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//   <div
//     className="block leading-6 p-3 outline-green-400 bg-white"
//     onClick={onClick}
//     ref={ref}
//   >
//     {value}
//   </div>
// ));
const SearchField = () => {
  const [place, setPlace] = useState("");
  const [range, setRange] = useState(100);
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
  const handleRange = (e) => {
    setRange(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const a = new Date(startDate).getTime();
    const b = new Date(endDate).getTime();
    console.log(place, a, b, range);
  };
  //* var one_day = 1000 * 60 * 60 * 24
  //* day calc = (b-a)/one_day
  return (
    <div className="bg-green-400 rounded-[1.2rem] border border-black p-5 w-[90%] mx-auto mb-[-4rem] z-10 absolute bottom-0 right-0 left-0 sm:relative shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className=" flex lg:justify-evenly lg:items-stretch md:flex-row md:justify-evenly  sm:flex-col md:flex-col">
          <div className="">
            <label htmlFor="place">Enter Country:</label>
            <input
              list="e"
              name="place"
              placeholder="Enter country"
              class="block border border-black leading-6 p-3 outline-green-400 sm:w-full"
              value={place}
              onChange={handleChange}
            />
            <datalist id="e">
              {countries.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </datalist>
          </div>
          <div>
            <label>Enter date:</label>
            <div>
              <DatePicker
                className="block border border-black leading-6 p-3 outline-green-400  px-9 sm:w-full"
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
          <div>
            <label htmlFor="price">Enter price range:&nbsp;</label>

            <input
              type="range"
              name="price"
              value={range}
              min="100"
              step="100"
              max="5000"
              placeholder="price"
              class="block border border-black leading-6 p-3 outline-green-400 sm:w-full "
              onChange={handleRange}
            />

            <output className="block">{range}$/day</output>
          </div>

          <div className="flex justify-center items-center border border-black gap-3 active:scale-[0.934] transition-all ease-linear duration-75 py-0 px-3 h-10 self-center bg-white sm:w-full">
            <input
              type="submit"
              value="search"
              class="block  leading-6  outline-green-400 "
            />
            <FiSearch />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
