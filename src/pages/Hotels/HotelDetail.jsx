import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const HotelDetail = () => {
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
  return (
    <div>
      <h1>HotelDetail for : {id}</h1>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          {data && (
            <>
              <h1>{HotelName}</h1>
              <h1>{address}</h1>
              <h1>{cheapestPrice}</h1>
              <h1>{city}</h1>
              <h1>{country}</h1>
              <h1>{desc}</h1>
              <h1>{rating}</h1>{" "}
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
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HotelDetail;
