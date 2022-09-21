import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchField.css";
import { countries } from "../../../public/country";
import Range from "./rangeSlider/Range";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const SearchField = () => {
  const navigate = useNavigate();
  const a = useContext(SearchContext);
  const { dispatch } = a;

  const [country, setCountry] = useState(a.country);
  // const [startDate, setStartDate] = useState(a.startDate);
  // const [endDate, setEndDate] = useState(a.endDate);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   const a = new Date(start).getTime();
  //   const b = new Date(end).getTime();
  //   setStartDate(start);
  //   setEndDate(end);
  //   // console.log(a, b);
  // };
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const [min1, setMin1] = useState(0);
  const [max1, setMax1] = useState(0);
  const handleRange = ({ min, max }) => {
    setMin1(min);
    setMax1(max);
  };
  // console.log(`min = ${min1}, max = ${max1}`);

  const handleClick = async (e) => {
    e.preventDefault();
    // const a = new Date(startDate).getTime();
    // const b = new Date(endDate).getTime();
    console.log(country, min1, max1);
    dispatch({
      type: "NEW_SEARCH",
      payload: { country, min1, max1 },
    });
    // navigate("/hotels", { state: { country, startDate, endDate, min1, max1 } });
    navigate("/hotels");
    // const result = await axios.get(
    //   `http://localhost:5000/api/hotel?country=${country}&min=${min1}&max=${max1}&startdate=${a}&enddate=${b}`
    // );
    // console.log(result.data);
  };
  //* var one_day = 1000 * 60 * 60 * 24
  //* day calc = (b-a)/one_day
  // const handleSearch = () => {
  //   dispatch({
  //     type: "NEW_SEARCH",
  //     payload: { country, startDate, endDate, min1, max1 },
  //   });
  //   navigate("/hotels", { state: { country, startDate, endDate, min1, max1 } });
  // };
  return (
    <section className="border border-black mt-4">
      <div className="px-2  mx-auto  bg-green-400">
        <div className="rounded-lg flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full p-3 ">
            <label htmlFor="country" className="leading-7 text-sm text-black">
              Enter Country:
            </label>
            <input
              type="text"
              list="e"
              id="full-name"
              name="full-name"
              className="w-full  rounded border  border-black outline-green-400  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
              value={country}
            />
            <datalist id="e">
              {countries.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </datalist>
          </div>

          <div className="relative flex-grow w-full p-3 ">
            <label className="leading-7 text-center text-sm text-black ">
              price range:&nbsp;
            </label>

            <Range min={0} max={1000} onChange={handleRange} />
          </div>
          <div className="p-3 w-full self-center ">
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
