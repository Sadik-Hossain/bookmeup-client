import React, { forwardRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./SearchField.css";

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
  const [endDate, setEndDate] = useState(new Date());
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

  return (
    <form className="bg-green-400  p-5" onSubmit={handleSubmit}>
      <div className="flex justify-evenly items-stretch ">
        <div className="">
          <label htmlFor="place">Enter place:</label>
          <input
            list="e"
            name="place"
            placeholder="Enter Place"
            class="block border border-black leading-6 p-3 outline-green-400 "
            value={place}
            onChange={handleChange}
          />
          <datalist id="e">
            <option>Russia</option>
            <option>Germany</option>
            <option>United Kingdom</option>
            <option>France</option>
            <option>Italy</option>
            <option>Spain</option>
            <option>Ukraine</option>
            <option>Poland</option>
            <option>Romania</option>
            <option>Netherlands</option>
            <option>Belgium</option>
            <option>Czech Republic</option>
            <option>Greece</option>
            <option>Portugal</option>
            <option>Sweden</option>
            <option>Hungary</option>
            <option>Belarus</option>
            <option>Austria</option>
            <option>Serbia</option>
            <option>Switzerland</option>
            <option>Bulgaria</option>
            <option>Denmark</option>
            <option>Finland</option>
            <option>Slovakia</option>
            <option>Norway</option>
            <option>Ireland</option>
            <option>Croatia</option>
            <option>Moldova</option>
            <option>Bosnia and Herzegovina</option>
            <option>Albania</option>
            <option>Lithuania</option>
            <option>North Macedonia</option>
            <option>Slovenia</option>
            <option>Latvia</option>
            <option>Estonia</option>
            <option>Montenegro</option>
            <option>Luxembourg</option>
            <option>Malta</option>
            <option>Iceland</option>
            <option>Andorra</option>
            <option>Monaco</option>
            <option>Liechtenstein</option>
            <option>San Marino</option>
            <option>Holy See</option>
          </datalist>
        </div>
        <div>
          <label>Enter date:</label>
          <div>
            <DatePicker
              className="block border border-black leading-6 p-3 outline-green-400  px-9 "
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText="Click to select a date"
              isClearable={true}
              required={true}
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
            class="block border border-black leading-6 p-3 outline-green-400  "
            onChange={handleRange}
          />

          <output className="block">{range}$/day</output>
        </div>
        <div className="flex justify-center items-center border border-black gap-3 active:scale-[0.934] transition-all ease-linear duration-75 py-0 px-3 h-10 self-center">
          <input
            type="submit"
            value="search"
            class="block  leading-6  outline-green-400 "
          />

          <FiSearch />
        </div>
      </div>
    </form>
  );
};

export default SearchField;
