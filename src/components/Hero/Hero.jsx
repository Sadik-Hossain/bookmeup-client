import Carousel from "react-multi-carousel";
import { AiFillCaretRight } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/pexels-frans-van-heerden-1438832.jpg";
import img2 from "../../assets/pexels-pixabay-259588.jpg";
import img3 from "../../assets/pexels-pixabay-276724.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <button onClick={() => next()} />
      <button onClick={() => goToSlide(currentSlide + 1)}>
        {" "}
        Go to any slide{" "}
      </button>
    </div>
  );
};
const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        draggable={false}
        swipeable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        <div>
          <img src={img1} className="max-w-full h-auto object-cover" alt="" />
        </div>
        <div className="w-auto ">
          <img src={img3} className="max-w-full h-auto object-cover" alt="" />
        </div>
        <div>
          <img src={img1} className="max-w-full h-auto object-cover" alt="" />
        </div>
      </Carousel>
      <div className="absolute  xs:bottom-4 md:bottom-10 left-0 flex flex-col gap-4 items-start ml-8 justify-end bg-transparent w-10/12 py-4 px-7">
        <h1 className="xs:text-xl sm:text-5xl md:text-6xl text-white  drop-shadow-lg shadow-black ">
          Lorem ipsum dolor sit amet.
        </h1>
        <button class="text-center text-indigo-400 font-bold rounded py-2 px-2  focus:outline-none bg-gray-900 border-2 border-indigo-400">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Hero;
