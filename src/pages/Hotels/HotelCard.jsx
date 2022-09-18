import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HotelCard = ({ e }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
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
    <div className="border-[2px] border-solid border-black p-3 my-4">
      <div>
        <img src={photos[0]} className="w-20 h-20 object-cover object-center" />
      </div>
      <div>
        <h1>
          <span className="font-bold">HotelId:</span> {_id}
        </h1>
        <p>
          <span className="font-bold">Hotel:</span> {HotelName}
        </p>
        <p>
          <span className="font-bold">price:</span> <b>$</b>
          {cheapestPrice}
        </p>
        <p>
          <span className="font-bold">city:</span> {city}
        </p>
        <p>
          <span className="font-bold">country:</span> {country}
        </p>
        <p>
          <span className="font-bold">desc:</span> {desc}
        </p>
      </div>

      <p>rating: {rating} </p>
      <div className="flex">
        <p>rooms:</p>
        <ul>
          {rooms.map((e) => (
            <li className="bg-green-300 mx-2 inline-block px-1 rounded-md">
              {e}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => navigate(`${location.pathname}/${_id}`)}
        className="active:scale-[0.934] transition-all ease-linear duration-75 py-0 px-3 h-10 self-center bg-green-400 mt-4 rounded-md text-black hover:bg-green-500"
      >
        Book Now!
      </button>
    </div>
  );
};

export default HotelCard;
