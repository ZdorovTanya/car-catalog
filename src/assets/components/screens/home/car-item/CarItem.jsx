import styles from "../Home.module.css";

function CarItem({cars}) {
  return (
    <div key={cars.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${cars.image})`,
        }}
      ></div>
      <div className={styles.info}>
        <h2>{cars.name}</h2>
        <p>
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "USD",
          }).format(cars.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default CarItem;
