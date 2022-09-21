import { useContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import SearchField from "../../components/SearchField/SearchField";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import HotelCard from "./HotelCard";

const Hotels = () => {
  const location = useLocation();
  // const propData = useState({
  //   country: location?.state?.country || "",
  //   min1: location?.state?.min1 || "",
  //   max1: location?.state?.max1 || "",
  //   startDate: location?.state?.startDate || "",
  //   endDate: location?.state?.endDate || "",
  // });
  // console.log(location);
  const a = useContext(SearchContext);
  // console.log(a);
  const { country, min1, max1 } = a;
  // console.log(country, min1, max1);
  const { data, loading, error } = useFetch(
    `/api/hotel?country=${country}&min=${min1}&max=${max1}`
  );
  //   console.log(data);
  return (
    <div>
      <SearchField />
      {error && <h1>{error.message}</h1>}

      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        <>
          <h1 className="text-center text-3xl font-bold my-6 capitalize">
            hotels found: {data.length}
          </h1>
          {data.length &&
            data.map((e, i) => (
              <div key={i}>
                <HotelCard e={e} />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Hotels;
/* 

 */
