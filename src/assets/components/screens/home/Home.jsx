import { useMemo } from "react";
import styles from "./Home.module.css";
import { cars } from "./cars.data.js";
import CarItem from "./car-item/CarItem";

function Home() {
  const filteredCars = useMemo (() => cars.filter (cars =>
    cars.price > 1000), [])

  return (
    <>
      <div>
        <h1>Cars Catalog</h1>
        <div>
          {filteredCars.length ? (
            filteredCars.map((cars) => <CarItem key={cars.id} cars={cars} />)
          ) : (
            <p>There are no cars</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
