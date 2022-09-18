import useFetch from "../../hooks/useFetch";
import HotelCard from "./HotelCard";

const Hotels = () => {
  const { data, loading, error } = useFetch(`/api/hotel`);
  //   console.log(data);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1 className="text-center text-2xl font-bold my-6">
            total hotels: {data.length}
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
