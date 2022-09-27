import { AiTwotoneStar } from "react-icons/ai";
import ReactStars from "react-stars";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
const HotelCard = ({ e }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  // console.log(e);
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
  } = e;
  return (
    <div className="border-2 border-solid border-slate-200 p-3 my-12   rounded-md lg:flex lg:flex-row w-10/12 mx-auto lg:justify-between md:flex md:flex-row   md:justify-between md:gap-4 flex flex-col items-center shadow-lg ">
      {/* 
      //* --------------- left --------------------
      */}
      <div className="p-4 ">
        <div>
          <img src={img1} className="w-48 h-48 object-cover object-center" />
        </div>
      </div>
      {/* 
      //* --------------- right ------------------
      */}
      <div className=" lg:px-4 lg:w-3/4 md:px-4 md:w-3/4 w-full">
        <p className=" leading-8">
          <b>Hotel:</b> {HotelName}
        </p>

        <p className=" leading-8">
          <b>country:</b> {country}
        </p>
        <p className=" leading-8">
          <b>city:</b> {city}
        </p>

        <div className="flex items-center">
          <b>ratings:</b>&nbsp;
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={rating}
            edit={false}
            half={true}
          />
        </div>
        <p className=" leading-8">
          <b>price:</b> <b>$</b>
          {cheapestPrice}
        </p>
        <p className="demo1 leading-6">
          <span className="font-bold  demo1">description:</span> {desc}
        </p>
        <button
          onClick={() => navigate(`${location.pathname}/${_id}`)}
          className="active:scale-[0.934] transition-all ease-linear duration-75 py-0 px-3 h-10 self-center bg-green-400 mt-4 rounded-md text-black hover:bg-green-500"
        >
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
