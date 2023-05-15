import { useState } from "react";
import styles from "./Home.module.css";
import { cars } from "./cars.data.js";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Cars Catalog</h1>
        <div>
          {cars.map((cars) => (
            <div key={cars.id} className={styles.item}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${cars.image})`,
                }}
              ></div>
              <div className={styles.info}>
                <h2>{cars.name}</h2>
                <p>{new Intl.NumberFormat('ru-RU',{
                  style:'currency',
                  currency:'USD',
                }).format(cars.price)}</p>
                <button>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
