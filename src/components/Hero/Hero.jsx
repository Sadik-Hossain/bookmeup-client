import Carousel from "react-multi-carousel";
import { AiFillCaretRight } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import SearchField from "../SearchField/SearchField";

const arr = [img1, img2, img3];

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
const CaroItem = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        className="object-cover object-center w-full h-[30rem] "
        alt=""
      />
    </div>
  );
};
const Hero = () => {
  return (
    <div className="relative">
      <Carousel
        draggable={false}
        swipeable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        arrows={false}
      >
        {arr.map((e, i) => (
          <CaroItem img={e} key={i} />
        ))}
      </Carousel>
      <SearchField />
    </div>
  );
};

export default Hero;
