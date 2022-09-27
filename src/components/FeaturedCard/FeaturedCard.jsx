import { BsFillStarFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";

export const FeaturedCard = ({ data }) => {
  const navigate = useNavigate();
  const { _id, photos, HotelName, city, country, desc, rating } = data;
  return (
    // <div className="lg:w-1/3 sm:w-1/2 p-8 ">
    <div className="border rounded-xl border-black c-card overflow-hidden mx-4">
      <div className="c-card overflow-hidden">
        <img
          alt="gallery"
          className="lg:h-56 md:h-48 h-48 w-full object-cover object-center "
          src={photos}
        />
      </div>
      <div className="px-8 py-4 w-full   bg-white ">
        <div className="flex justify-between items-center">
          <div className="mb-2">
            <h2 className=" text-md text-ellipsis overflow-hidden whitespace-nowrap max-w-[10ch] font-bold text-black ">
              {city}
            </h2>
            <p>{country}</p>
          </div>
          <div className="flex items-center text-2xl">
            <p className="text-black">{rating}</p>
            <BsFillStarFill className=" mx-3 text-yellow-400" />
          </div>
        </div>
        <h1 className="  text-ellipsis overflow-hidden whitespace-nowrap text-lg font-medium text-black ">
          {HotelName}
        </h1>

        <p className="demo1">{desc}</p>

        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          isHalf={true}
          edit={false}
          value={rating}
        />
        <Link
          to={`hotels/${_id}`}
          className="active:scale-[0.934] transition-all ease-linear duration-75 py-1 px-3  self-center bg-green-400 inline-block mt-4 rounded-md text-black hover:bg-green-500 "
        >
          Read more
        </Link>
      </div>
    </div>
  );
  {
    /* </div> */
  }
};
