import { useState } from "react";
import styles from "./Home.module.css";
import { cars } from "./cars.data.js";
import CarItem from "./car-item/CarItem";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Cars Catalog</h1>
        <div>
          {cars.length ? (
            cars.map((cars) => <CarItem key={cars.id} cars={cars} />)
          ) : (
            <p>There are no cars</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
