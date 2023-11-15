/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

// eslint-disable-next-line react/prop-types
function CityList() {
  const {isLoading, cities} = useCities();
  if (isLoading) return <Spinner />;

  // eslint-disable-next-line react/prop-types
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  // eslint-disable-next-line react/prop-types
  return (
    <ul className={styles.citylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
