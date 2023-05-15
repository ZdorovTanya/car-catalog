import { useMemo, useState } from "react";
import styles from "./Home.module.css";
import { cars } from "./cars.data.js";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
  // const filteredCars = useMemo (() => cars.filter (cars =>
  //   cars.price > 1000), [])

  return (
    <>
      <div>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <img src="/public/main.jpg" alt="big picture" />

          <div className={styles.presentation__text}>
            <p>
              If you have any concerns or questions, please call the Land Rover
              Call Center at 8-800-200-80-81 (toll-free).
            </p>
            <p>
              Customer service staff are available Monday through Friday from
              9:00 am to 7:00 pm
            </p>
            <p>
              You can also sometimes in the customer service department of the
              service center in your Ministry
            </p>
          </div>
        </div>

        <CreateCarForm />
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
