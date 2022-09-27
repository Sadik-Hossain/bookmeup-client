import { BsStars } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import useFetch from "../../hooks/useFetch";
import { FeaturedCard } from "../FeaturedCard/FeaturedCard";
import Loader from "../Loader/Loader";
import "./featured.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const arr = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const Featured = () => {
  const { data, loading, error } = useFetch(`/api/hotel/featured`);
  console.log(data);
  return (
    <section className="text-gray-600 ">
      <div className="flex justify-between items-center mt-8 px-8">
        <h1 className="text-3xl text-black text-center ">
          Fetured Hotel
          <span>
            <BsStars className="inline text-yellow-400" />
          </span>
        </h1>
        <Link to="/">View all</Link>
      </div>

      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="border px-5 py-8 mx-auto">
          <Carousel
            draggable={true}
            swipeable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={true}
            renderButtonGroupOutside={true}
            className="py-4 "
          >
            {data.map((e, i) => (
              <FeaturedCard data={e} key={i} />
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default Featured;
