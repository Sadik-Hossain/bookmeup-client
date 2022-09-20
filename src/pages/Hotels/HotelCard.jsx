import { AiTwotoneStar } from "react-icons/ai";
import ReactStars from "react-stars";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
const HotelCard = ({ e }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  console.log(e);
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
    <div className="border-[2px] border-solid border-black p-3 my-4  lg:flex lg:flex-row lg:justify-between md:flex md:flex-row   md:justify-between md:gap-4 flex flex-col items-center">
      {/* 
      //* --------------- left --------------------
      */}
      <div className="border-2 border-black p-4 ">
        <div className="border-2 border-black ">
          <img src={img1} className="w-48 h-48 object-cover object-center" />
        </div>
      </div>
      {/* 
      //* --------------- right ------------------
      */}
      <div className="border-2 border-black px-4 w-3/4">
        <p>
          <b>Hotel:</b> {HotelName}
        </p>
        <p>
          <b>price:</b> <b>$</b>
          {cheapestPrice}
        </p>
        <p>
          <b>city:</b> {city}
        </p>
        <p>
          <b>country:</b> {country}
        </p>
        <p className="flex items-center">
          <b>ratings:</b>&nbsp;
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={rating}
            edit={false}
            half={true}
          />
          {/* {rating}
          <AiTwotoneStar className="inline-block align-top text-xl" /> */}
        </p>
        <p className="demo1">
          <span className="font-bold  demo1">desc:</span> {desc}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
